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

	// Base64 PDF content : Setter
	@Input() 
	set b64Pdf(b64Pdf: string) {
        this.binaryContent = this.base64ToArrayBuffer(b64Pdf);
	}

    // Base64 decode
	private base64ToArrayBuffer(base64) {
	    let binary_string =  window.atob(base64);
        let len = binary_string.length;
        let bytes = new Uint8Array( len );
	    for (let i = 0; i < len; i++)        {
	        bytes[i] = binary_string.charCodeAt(i);
	    }
	    return bytes.buffer;
	}
}
