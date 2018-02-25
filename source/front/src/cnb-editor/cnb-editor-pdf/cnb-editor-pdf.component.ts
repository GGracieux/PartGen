// Imports core
import {Component, Input} from '@angular/core';

@Component({
    selector: 'cnb-editor-pdf',
    styleUrls: ['./cnb-editor-pdf.component.css'],
    templateUrl: './cnb-editor-pdf.component.html'
})

export class CnbEditorPdfComponent {

	// Conteny binaire du PDF
	private binaryContent;

	// Contenu base64 du PDF
	private _content;

	// Contenu base64 du PDF : Getter
  	get content(): string {
    	return this._content;
	}

	// Contenu base64 du PDF : Setter
	@Input() 
	set content(content: string) {
    	this._content = content;
    	this.loadPdf(this._content);
	}

	// Charge le contenu du pdf a partir du contenu base64
    public loadPdf(base64pdf) {
    	this.binaryContent = this.base64ToArrayBuffer(base64pdf);
    }

    // Base64 decode
	private base64ToArrayBuffer(base64) {
	    var binary_string =  window.atob(base64);
	    var len = binary_string.length;
	    var bytes = new Uint8Array( len );
	    for (var i = 0; i < len; i++)        {
	        bytes[i] = binary_string.charCodeAt(i);
	    }
	    return bytes.buffer;
	}
	
}
