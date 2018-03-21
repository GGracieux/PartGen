// Imports Core
import {Component, EventEmitter, Input, Output} from '@angular/core';

import {WorkFlowState} from '../cnb-editor/cnb-editor.workflow';

@Component({
    selector: 'cnb-editor-menu',
    styleUrls: ['./cnb-editor-menu.component.css'],
    templateUrl: './cnb-editor-menu.component.html'
})

export class CnbEditorMenuComponent {

    @Input() wfState: WorkFlowState;

	@Output() menuClicked = new EventEmitter<string>();

	@Output() sampleLoad = new EventEmitter<string>();

    public menuClick(action:string) {
    	this.menuClicked.emit(action);
    } 

    public sampleClick(name:string) {
    	this.sampleLoad.emit(name);
    } 

}
