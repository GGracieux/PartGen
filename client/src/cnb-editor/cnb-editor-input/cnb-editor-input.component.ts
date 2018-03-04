// Imports core
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'cnb-editor-input',
    styleUrls: ['./cnb-editor-input.component.css'],
    templateUrl: './cnb-editor-input.component.html'
})

export class CnbEditorInputComponent {

	// Contenu de l'editeur
	private _content: string;

	// Contenu de l'editeur : Getter
  	get content(): string {
    	return this._content;
	}

	// Contenu de l'editeur : Setter
	@Input() 
	set content(content: string) {
    	this._content = content;
    	this.contentChange.emit(this._content);
	}

	// Evenement pour 2 way binding
	@Output() contentChange = new EventEmitter<string>();

}
