// Imports core
import {Component, OnInit} from '@angular/core';

// Import service de convertion CNB -> LP
import {Cnb2lpService} from '../../services/cnb2lp/cnb2lp.service';
import {CNBStatusCode} from '../../services/cnb2lp/cnb2lp.interfaces';

// Import API
import {LilyPondAPI} from '../../services/lilypond-api/lilypond-api.service';
import {Midi2mp3API} from '../../services/midi2mp3-api/midi2mp3-api.service';

// Import interfaces et enum de gestion des logs (API et composant)
import {LPStatusCode} from '../../services/lilypond-api/lilypond-api.interfaces';
import {MMStatusCode} from '../../services/midi2mp3-api/midi2mp3-api.interfaces';
import {LogEntry, logLevel} from '../cnb-editor-log/cnb-editor-log.interface';

// Import enum du workflow de generation des données
import {WorkFlowState} from './cnb-editor.workflow';

// Import score sample loader
import {CnbEditorSamples} from './cnb-editor.samples';

// Import for zipping and saving
import * as filesaver from 'file-saver';
import * as JSZip from 'jszip';

@Component({
    selector: 'cnb-editor',
    styleUrls: ['./cnb-editor.component.css'],
    templateUrl: './cnb-editor.component.html'
})

export class CnbEditorComponent implements OnInit {

    //-- Component data
	public dataCnb: string = '';
    public dataLp: string = '';
    public dataBase64Pdf: string = '';
    public dataBase64Midi: string = '';
    public dataBase64Mp3: string = '';
    public dataLog: LogEntry[] = [];

	//-- Workflow & Generation state
    public state = WorkFlowState;
	public wfState: WorkFlowState = WorkFlowState.APP_INIT;

    // Text modified flag
    public inputChanged = true;

	//-- Current song name
    public scoreName = 'score';

    //-- Sample loader
    public sampleLoader: CnbEditorSamples;


    // ------------------------------------
    // INIT
    // ------------------------------------

    constructor(
        private cnb2lp: Cnb2lpService,
        private lilypond: LilyPondAPI,
        private midi2mp3: Midi2mp3API
    ) {}

    public ngOnInit() {
        this.sampleLoader = new CnbEditorSamples();
    	this.loadSample('intro');
    }

    public loadSample(name: string)
    {   
        this.dataCnb = this.sampleLoader.getSample(name);
    }


    // ------------------------------------
    // MENU
    // ------------------------------------

    public menuAction(methodName: string) {
		this[methodName]();
    }
	

    // ------------------------------------
    // GENERATION
    // ------------------------------------

    public contentChange(newCode: string) {
        this.dataCnb = newCode;
        this.inputChanged = true;
    }

    private generate() {

        // Reinit workflow and data
        this.wfState = WorkFlowState.APP_INIT;
        this.dataLp = '';
        this.dataBase64Pdf = '';
        this.dataBase64Midi = '';
        this.dataBase64Mp3 = '';
        this.dataLog = [];

        // Prevent generating if text does not change
        this.inputChanged = false;

        // Launches generation chain
        this.launchCnb2Lp();
    }

    private launchCnb2Lp() {
        this.scoreName = 'partition';
		this.wfState = WorkFlowState.CNB2LP_RUN;
        this.cnb2lp.convert(this.dataCnb, this.scoreName).subscribe(
            cnb => {
                this.scoreName = cnb.scoreName;
                let title = 'Cnb2lp : Text to Lilypond Convertion';
                if (cnb.statusCode == CNBStatusCode.OK) {
                    this.dataLp = cnb.lpData;
                    this.log (title, cnb.log, logLevel.success);
                    this.wfState = WorkFlowState.CNB2LP_OK;
                    this.launchLilypond(cnb.multiple);
                } else {
					this.wfState = WorkFlowState.CNB2LP_ERR;
                    this.log (title, cnb.log, logLevel.warning);
                }
            },
            msg => {
				this.wfState = WorkFlowState.CNB2LP_ERR;
                this.log('cnb2lp', `Erreur: ${msg.status} ${msg.statusText}`, logLevel.error );
            }
        )
    }

    private launchLilypond(multiple = false) {
		this.wfState = WorkFlowState.LILYPOND_RUN;
        this.lilypond.convert(this.dataLp).subscribe(
            lp => {
                if (lp.statusCode == LPStatusCode.OK) {
                    this.dataBase64Pdf = lp.base64PdfData;
                    this.dataBase64Midi = lp.base64MidiData;
                    this.PGlog(lp.logs, logLevel.success);
                    this.wfState = WorkFlowState.LILYPOND_OK;
                    if (!multiple) {
                        this.launchMidi2Mp3();
                    } else {
                        this.wfState = WorkFlowState.SUCCESS;
                    }
                } else {
					this.wfState = WorkFlowState.LILYPOND_ERR;
                    this.PGlog(lp.logs, logLevel.warning);
                }
            },
            msg => {
				this.wfState = WorkFlowState.LILYPOND_ERR;
                this.log('lilypond', `Erreur: ${msg.status} ${msg.statusText}`, logLevel.error );
            }
        );
    }

    private launchMidi2Mp3() {
		this.wfState = WorkFlowState.MIDI2MP3_RUN;
        this.midi2mp3.convert(this.dataBase64Midi).subscribe(
            mp3 => {
                if (mp3.statusCode == MMStatusCode.OK) {
                    this.dataBase64Mp3 = mp3.base64Mp3Data;
                    this.PGlog(mp3.logs, logLevel.success);
					this.wfState = WorkFlowState.MIDI2MP3_OK;
					this.wfState = WorkFlowState.SUCCESS;
                } else {
					this.wfState = WorkFlowState.MIDI2MP3_ERR;
                    this.PGlog(mp3.logs, logLevel.warning);
                }
            },
            msg => {
				this.wfState = WorkFlowState.MIDI2MP3_ERR
                this.log('midi2mp3', `Erreur: ${msg.status} ${msg.statusText}`, logLevel.error );
            }
        );
    }

    // ------------------------------------
	// DOWNLOADS
    // ------------------------------------

    public zipping: boolean = false;

	private download() {

	    this.zipping = true;

	    let zip = new JSZip();
        zip.file(this.scoreName + '.txt', this.dataCnb);
        if (this.wfState >= WorkFlowState.CNB2LP_OK) {
            zip.file(this.scoreName + '.ly', this.dataLp);
        }
        if (this.wfState >= WorkFlowState.LILYPOND_OK) {
            zip.file(this.scoreName + '.pdf', this.dataBase64Pdf, {base64: true});
            zip.file(this.scoreName + '.midi', this.dataBase64Midi, {base64: true});
        }
        if ((this.wfState >= WorkFlowState.MIDI2MP3_OK) && (this.dataBase64Mp3 != '')) {
            zip.file(this.scoreName + '.mp3', this.dataBase64Mp3, {base64: true});
        }

        var self = this;
        zip.generateAsync({type:"blob"}).then(function(content) {
            filesaver.saveAs(content, self.scoreName + '.zip');
            self.zipping = false;
        });
    }


    // ------------------------------------
    // LOGS
    // ------------------------------------

    private log(title: string, content: string, level: logLevel) {
        let contentHTML = content.replace(/(?:\r\n|\r|\n)/g, '<br />');
        let logEntry = {title: title, content: contentHTML, level: level }
        this.dataLog.push(logEntry);
    }

    private PGlog(logs, level: logLevel)
    {
        for (let log of logs) {
            this.log(log.title, log.content, level)
        }
    }

    // ------------------------------------
    // VIEWER
    // ------------------------------------

    public zoom = 0.9;

    zoomAction(zoomLevel: number) {
        this.zoom = zoomLevel;
    }
    
}
