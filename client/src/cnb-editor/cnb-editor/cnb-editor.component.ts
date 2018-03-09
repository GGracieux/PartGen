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
import {WorkFlowState, GenerationState} from './cnb-editor.workflow';

// Import File Saver
import * as filesaver from 'file-saver';


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
	public wfState = WorkFlowState.INIT;
	public generating = GenerationState.SLEEPING;

	//-- Current song name
    public scoreName = 'score';


    // ------------------------------------
    // INIT
    // ------------------------------------

    constructor(
        private cnb2lp: Cnb2lpService,
        private lilypond: LilyPondAPI,
        private midi2mp3: Midi2mp3API
    ) {}

    public ngOnInit() {
    	this.initDefaultValues();
    }

    private initDefaultValues()
    {
        this.dataCnb = "[language=français]\n" +
            "[tempo=90]\n" +
            "[clef=G]\n" +
            "[tonalite=mibM]\n" +
            "\n" +
            "[4/4] \n" +
            "R2{ \n" +
            "\t(LA,mi,re) mi4 - mi8 fa16 sol16 (la,fa,sol) fa8 mi8 (la) SI8 mi8\n" +
            "\t(la,fa,sol) fa4 - fa8 sol8 (fa) sol2\n" +
            "\t(la) sol4 - sol8 la16 si16 (sol) la8 sol8 (la) fa8 mi8\n" +
            "\t(la,fa,sol) fa4 - fa8 sol8 (SI,LA,SI,LA) SI2 |\n" +
            "\n" +
            "\t(LA,mi,LA) do4 - do8 re16 mi16 (re) mi8 SI8 (mi) re8 mi8 \n" +
            "\t(si,la) si4 -si8 si8 la8 (si) sol2\n" +
            "\t(la,fa,sol) fa4 - fa8 sol16 la16 (si) sol8 mi8 (la) SI8 mi8\n" +
            "\t(la,fa,sol) fa4 - fa8 mi8 (la,mi,re) mi2 |\n" +
            "\n" +
            "\t(la,re,mi) re4 - re8 SI8 (la,fa,sol) fa4 - fa8 re16 fa16\n" +
            "\t(la,sol,la) sol4 - sol8 re8 (LA,mi,LA) re4 - re8 do8\n" +
            "\t(LA) SI4 (la) SI16 do16 re8 (la,do,mi) do2\n" +
            "\t(la,re,mi) re4 (la) re16 mi16 fa8 (la,do,mi) do2 |\n" +
            "\n" +
            "\t(la,re,mi) re4 - re8 SI8 (la,fa,sol) fa4 - fa8 re16 fa16\n" +
            "\t(la,sol,la) sol4 - sol8 re8 (LA,mi,LA) re4 - re8 do8\n" +
            "\t(LA) SI4 (la) SI16 do16 re8 (la,do,mi) do4 - do8 SI8\n" +
            "\t(la,SI,LA,SI,LA) SI2 - SI2 |\n" +
            "}";
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

    private generate() {

        // Reinit workflow and data
        this.wfState = WorkFlowState.INIT;
        this.dataLp = '';
        this.dataBase64Pdf = '';
        this.dataBase64Midi = '';
        this.dataBase64Mp3 = '';
        this.dataLog = [];

        // Launches generation chain
        this.launchCnb2Lp();
    }

    private launchCnb2Lp() {
        this.generating = GenerationState.WORKING;
        this.cnb2lp.convert(this.dataCnb).subscribe(
            cnb => {
                let title = 'Cnb2lp : Convertion CNB -> Lilypond';
                if (cnb.statusCode == CNBStatusCode.OK) {
                    this.dataLp = cnb.lpData;
                    this.log (title, cnb.log, logLevel.success);
                    this.wfState = WorkFlowState.CNB2LP_OK;
                    this.launchLilypond();
                } else {
                    this.log (title, cnb.log, logLevel.warning);
                }
                this.generating = GenerationState.SLEEPING;
            },
            msg => {
                this.log('cnb2lp', `Erreur: ${msg.status} ${msg.statusText}`, logLevel.error );
                this.generating = GenerationState.SLEEPING;
            }
        )
    }

    private launchLilypond() {
        this.generating = GenerationState.WORKING;
        this.lilypond.convert(this.dataLp).subscribe(
            lp => {
                if (lp.statusCode == LPStatusCode.OK) {
                    this.dataBase64Pdf = lp.base64PdfData;
                    this.dataBase64Midi = lp.base64MidiData;
                    this.PGlog(lp.logs, logLevel.success);
                    this.wfState = WorkFlowState.LILYPOND_OK;
                    this.launchMidi2Mp3();
                } else {
                    this.PGlog(lp.logs, logLevel.warning);
                }
                this.generating = GenerationState.SLEEPING;
            },
            msg => {
                this.log('lilypond', `Erreur: ${msg.status} ${msg.statusText}`, logLevel.error );
                this.generating = GenerationState.SLEEPING;
            }
        );
    }

    private launchMidi2Mp3() {
        this.generating = GenerationState.WORKING;
        this.midi2mp3.convert(this.dataBase64Midi).subscribe(
            mp3 => {
                if (mp3.statusCode == MMStatusCode.OK) {
                    this.dataBase64Mp3 = mp3.base64Mp3Data;
                    this.PGlog(mp3.logs, logLevel.success);
					this.wfState = WorkFlowState.MIDI2MP3_OK;
                } else {
                    this.PGlog(mp3.logs, logLevel.warning);
                }
                this.generating = GenerationState.SLEEPING;
            },
            msg => {
                this.log('midi2mp3', `Erreur: ${msg.status} ${msg.statusText}`, logLevel.error );
                this.generating = GenerationState.SLEEPING;
            }
        );
    }

    // ------------------------------------
	// DOWNLOADS
    // ------------------------------------
	
	private downloadCNB() {
        this.saveData('txt','text/plain;charset=utf-8', this.dataCnb, false);
    }
	
	private downloadLP() {
        this.saveData('ly','text/plain;charset=utf-8', this.dataLp, false);
	}
	
	private downloadPDF() {
        this.saveData('pdf','application/pdf', this.dataBase64Pdf, true);
	}
	
	private downloadMIDI() {
        this.saveData('midi','audio/midi', this.dataBase64Midi, true);
	}
	
	private downloadMP3() {
        this.saveData('mp3','audio/mpeg', this.dataBase64Mp3, true);
	}

	private saveData(ext: string, contentType: string, data: string, b64Decode: boolean) {
        const filename = this.scoreName + '.' + ext;
        let blob;
        if (b64Decode) {
            blob = this.b64toBlob(data, contentType);
        } else {
            blob = new Blob([data], { type: contentType });
        }
        filesaver.saveAs(blob, filename);
    }

    private b64toBlob(b64Data: string, contentType: string = '') {

        let sliceSize = 512;
        let byteCharacters = atob(b64Data);
        let byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);
            let byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            let byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        let blob = new Blob(byteArrays, {type: contentType});
        return blob;
    };


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

}
