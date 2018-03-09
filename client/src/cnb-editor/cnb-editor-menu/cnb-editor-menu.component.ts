// Imports Core
import {Component, EventEmitter, Input, Output} from '@angular/core';

// Imports data generation workflow
import {WorkFlowState} from '../cnb-editor/cnb-editor.workflow';

@Component({
    selector: 'cnb-editor-menu',
    styleUrls: ['./cnb-editor-menu.component.css'],
    templateUrl: './cnb-editor-menu.component.html'
})

export class CnbEditorMenuComponent {


	//----- Workflow state handling (menu activation)

	@Input() wfState: WorkFlowState;

	public isDisabled(wfMinState: number) {
		return wfMinState > this.wfState;
	}	
	
	
	//----- Menu click events

	@Output() menuClicked = new EventEmitter<string>();

    public menuClick(action:string) {
    	this.menuClicked.emit(action);
    } 

}
