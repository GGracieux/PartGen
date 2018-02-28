// Imports core
import {Component, OnInit} from '@angular/core';

// Import API
import {PartGenAPI} from '../../partgen-api/partgen-api.service';

@Component({
    selector: 'cnb-editor',
    styleUrls: ['./cnb-editor.component.css'],
    templateUrl: './cnb-editor.component.html'
})

export class CnbEditorComponent implements OnInit {

	public dataCnb;
    public dataLp;
    public dataPdf;
    public dataMidi;
    public dataLog;
    public dataMp3;

    constructor(private api: PartGenAPI) {}

    public ngOnInit() {
    	this.initDefaultValues();
    }

    public menuAction(action:string) {
        switch(action) {
            case 'genererPdf':
                this.genererPdf();
                break;
            case 'genererMp3':
                this.genererMp3();
                break;
        }
    }

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
        this.dataLog = '';
        this.dataLp = '';
        this.dataPdf = '';
        this.api.cnb2lp(this.dataCnb).subscribe(
            cnb => {
                this.dataLp = cnb.lpData
                this.api.lilypond(this.dataLp).subscribe(
                    lp => {
                        this.dataPdf = lp.base64PdfData;
                        this.dataMidi = lp.base64MidiData;
                    },
                    msg => {
                        this.dataLog += `Error: ${msg.status} ${msg.statusText}`;
                    }
                );
            },
            msg => {
                this.dataLog += `Error: ${msg.status} ${msg.statusText}`;
            }
        );
    }

    private genererMp3() {
        this.dataMp3 = '';
        this.api.midi2mp3(this.dataMidi).subscribe(
            midi => {
                this.dataMp3 = midi.base64Mp3Data;
            },
            msg => {
                console.error(`Error: ${msg.status} ${msg.statusText}`)
            }
        );
    }

    private initDefaultValues() {

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
            "\t(la,SI,LA,SI,LA) SI2 - SI2 |\n";

    	this.dataPdf = '';

        this.dataMp3 = '';

        this.dataLog = '';
    }
	


}
