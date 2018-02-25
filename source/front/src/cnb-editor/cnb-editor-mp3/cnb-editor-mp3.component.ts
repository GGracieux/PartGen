// Imports core
import {Component, Input} from '@angular/core';

@Component({
    selector: 'cnb-editor-mp3',
    styleUrls: ['./cnb-editor-mp3.component.css'],
    templateUrl: './cnb-editor-mp3.component.html'
})

export class CnbEditorMp3Component {

	// Contenu base64 du MP3 
	@Input() content;	
	
}
