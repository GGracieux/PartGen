// Imports core
import {Component, Input, ViewChild } from '@angular/core';

import {WorkFlowState} from '../cnb-editor/cnb-editor.workflow';

@Component({
    selector: 'cnb-editor-progress',
    styleUrls: ['./cnb-editor-progress.component.css'],
    templateUrl: './cnb-editor-progress.component.html'
})

export class CnbEditorProgressComponent {

	@ViewChild('progress') public progressModal;

	public workflowState = WorkFlowState;

	//------  WorkFlow State
	
    private _currState: WorkFlowState;

    get currState(): WorkFlowState {
        return this._currState;
    }

    @Input()
    set currState(wfState: WorkFlowState) {
		if(wfState>1) this.progressModal.show();
        this._currState = wfState;
		switch (wfState) {
			case WorkFlowState.MIDI2MP3_OK:
				console.log('Success, auto close popup after 1 sec');
				break;
			case WorkFlowState.CNB2LP_ERR:
			case WorkFlowState.LILYPOND_ERR:
			case WorkFlowState.MIDI2MP3_ERR:
				console.log('Error, auto close popup after 1 sec and open log');
				break;			 
		}
    }		
		
}
