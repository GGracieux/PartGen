// Imports core
import {Component, EventEmitter, Input, Output} from '@angular/core';

// Imports code mirror mode
import 'codemirror-bps/mode/bps-breizh/bps-breizh.js';

@Component({
    selector: 'cnb-editor-input',
    styleUrls: ['./cnb-editor-input.component.css'],
    templateUrl: './cnb-editor-input.component.html'
})

export class CnbEditorInputComponent {

	private config = { lineNumbers: true, mode: 'text/bps-breizh' };

	// Editor code
	private _code: string;

	// Editor code : Getter
  	get code(): string {
    	return this._code;
	}

	// Editor code : Setter
	@Input() set code(code: string) {
    	this._code = code;
    	this.contentChange.emit(this._code);
	}

	// Code change event
	@Output() contentChange = new EventEmitter<string>();

}
