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

// Import File Saver
import {saveAs} from 'file-saver/FileSaver';


@Component({
    selector: 'cnb-editor',
    styleUrls: ['./cnb-editor.component.css'],
    templateUrl: './cnb-editor.component.html'
})

export class CnbEditorComponent implements OnInit {

    //-- Données de l'editeur
	public dataCnb: string = '';
    public dataLp: string = '';
    public dataBase64Pdf: string = '';
    public dataBase64Midi: string = '';
    public dataBase64Mp3: string = '';
    public dataLog: LogEntry[] = [];


    // ----- Initialisation

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


    // ----- Gestion des actions

    public menuAction(action: string) {
        switch(action) {
            case 'genererPdf':
                this.genererPdf();
                break;
            case 'genererMp3':
                this.genererMp3();
                break;
            case 'download':
                this.download();
                break;
        }
    }

    public download() {
    }

    // ----- Generation Pdf et Mp3

    private genererPdf() {
        this.reinitStep1();

        this.cnb2lp.convert(this.dataCnb).subscribe(
            cnb => {
                let title = 'Cnb2lp : Convertion CNB -> Lilypond';
                if (cnb.statusCode == CNBStatusCode.OK) {
                    this.dataLp = cnb.lpData;
                    this.log (title, cnb.log, logLevel.success);
                    this.lilypond.convert(this.dataLp).subscribe(
                        lp => {
                            if (lp.statusCode == LPStatusCode.OK) {
                                this.dataBase64Pdf = lp.base64PdfData;
                                this.dataBase64Midi = lp.base64MidiData;
                                this.PGlog(lp.logs, logLevel.success);
                            } else {
                                this.PGlog(lp.logs, logLevel.warning);
                            }
                        },
                        msg => {
                            this.log('lilypond', `Erreur: ${msg.status} ${msg.statusText}`, logLevel.error );
                        }
                    );
                } else {
                    this.log (title, cnb.log, logLevel.warning);
                }
            },
            msg => {
                this.log('cnb2lp', `Erreur: ${msg.status} ${msg.statusText}`, logLevel.error );
            }
        )
    }

    private genererMp3() {
        this.reinitStep2();
        this.midi2mp3.convert(this.dataBase64Midi, 'bagpipes').subscribe(
            mp3 => {
                if (mp3.statusCode == MMStatusCode.OK) {
                    this.dataBase64Mp3 = mp3.base64Mp3Data;
                    this.PGlog(mp3.logs, logLevel.success);
                } else {
                    this.PGlog(mp3.logs, logLevel.warning);
                }
            },
            msg => {
                this.log('midi2mp3', `Erreur: ${msg.status} ${msg.statusText}`, logLevel.error );
            }
        );
    }

    // ----- Gestion de la réinit des données

    private reinitStep1() {
        this.dataLp = '';
        this.dataBase64Pdf = '';
        this.dataBase64Midi = '';
        this.dataBase64Mp3 = '';
        this.dataLog = [];
    }

    private reinitStep2() {
        this.dataBase64Mp3 = '';
    }

    // ----- Gestion des logs

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
