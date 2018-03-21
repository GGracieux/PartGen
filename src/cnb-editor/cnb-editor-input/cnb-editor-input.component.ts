// Imports core
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'cnb-editor-input',
    styleUrls: ['./cnb-editor-input.component.css'],
    templateUrl: './cnb-editor-input.component.html'
})

export class CnbEditorInputComponent {

	// Editor content
	private _content: string;

	// Editor content : Getter
  	get content(): string {
    	return this._content;
	}

	// Editor content : Setter
	@Input() set content(content: string) {
    	this._content = content;
    	this.contentChange.emit(this._content);
	}

	// Content change event
	@Output() contentChange = new EventEmitter<string>();

}
