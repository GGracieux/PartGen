// Imports core
import {Component, Input} from '@angular/core';

@Component({
    selector: 'cnb-editor-pdf',
    styleUrls: ['./cnb-editor-pdf.component.css'],
    templateUrl: './cnb-editor-pdf.component.html'
})

export class CnbEditorPdfComponent {

	// generation flag
	@Input() generating;

	// Zoom level
	@Input() zoomLevel;

	// PDF binary content
	public binaryContent;

	// Base64 PDF content
	private _b64Pdf;

	// Base64 PDF content : Setter
	@Input() 
	set b64Pdf(b64Pdf: string) {
    	this._b64Pdf = b64Pdf;
    	this.loadPdf(this._b64Pdf);
	}

	// Load PDF from base64 content
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
