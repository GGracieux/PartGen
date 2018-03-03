// Imports core
import {Component, OnInit} from '@angular/core';

// Import API
import {PartGenAPI} from '../../partgen-api/partgen-api.service';

// Import interfaces et enum de gestion des logs (API et composant)
import {PGLog, statusCode} from '../../partgen-api/partgen-api.interfaces';
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

    constructor(private api: PartGenAPI) {}

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

    private b64toBlob(b64Data, contentType, sliceSize=512) {
      contentType = contentType || '';
      sliceSize = sliceSize || 512;

      var byteCharacters = atob(b64Data);
      var byteArrays = [];

      for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
      }
        
      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
    }    

    public download() {

        const filename = 'img.png';
        var contentType = 'application/pdf';
        var blob = this.b64toBlob(this.dataBase64Pdf, contentType);
saveAs(blob, filename);
/*
        var blobUrl = URL.createObjectURL(blob);

        var img = document.createElement('img');
        img.src = blobUrl;
        document.body.appendChild(img);

        //const contentDispositionHeader: string = response.headers.get('Content-Disposition');
        //const parts: string[] = contentDispositionHeader.split(';');
        const filename = 'test.pdf';
        let blob = new Blob([atob(this.dataBase64Pdf)], {type :"application/pdf"});
        saveAs(blob, filename);
  */
    }

    // ----- Generation Pdf et Mp3

    private getAPIInfo() {
        this.api.cnb2lpInfo().subscribe(
            res => console.log(res),
            msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        );
        this.api.lilypondInfo().subscribe(
            res => console.log(res),
            msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        );
        this.api.midi2mp3Info().subscribe(
            res => console.log(res),
            msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        );
    }

    private genererPdf() {
        this.reinitStep1();
        this.api.cnb2lp(this.dataCnb).subscribe(
            cnb => {
                if (cnb.status.code == statusCode.OK) {
                    this.dataLp = cnb.lpData;
                    this.PGlog(cnb.logs, logLevel.success);
                    this.api.lilypond(this.dataLp).subscribe(
                        lp => {
                            if (lp.status.code == statusCode.OK) {
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
                    this.PGlog(cnb.logs, logLevel.warning);
                }
            },
            msg => {
                this.log('cnb2lp', `Erreur: ${msg.status} ${msg.statusText}`, logLevel.error );
            }
        );
    }

    private genererMp3() {
        this.reinitStep2();
        this.api.midi2mp3(this.dataBase64Midi).subscribe(
            midi => {
                if (midi.status.code == statusCode.OK) {
                    this.dataBase64Mp3 = midi.base64Mp3Data;
                    this.PGlog(midi.logs, logLevel.success);
                } else {
                    this.PGlog(midi.logs, logLevel.warning);
                }
            },
            msg => {
                this.log('cnb2lp', `Erreur: ${msg.status} ${msg.statusText}`, logLevel.error );
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

    private PGlog(pgLogs: PGLog[], level: logLevel)
    {
        for (let pgLog of pgLogs) {
            this.log(pgLog.title, pgLog.content, level)
        }
    }

}
