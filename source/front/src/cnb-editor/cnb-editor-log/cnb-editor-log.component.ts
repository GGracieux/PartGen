// Imports core
import {Component, Input} from '@angular/core';

@Component({
    selector: 'cnb-editor-log',
    styleUrls: ['./cnb-editor-log.component.css'],
    templateUrl: './cnb-editor-log.component.html'
})

export class CnbEditorLogComponent {

	// Contenu des logs
	@Input() content;
	
}
