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

        this._currState = wfState;
        console.log(wfState);
		
		if (wfState != WorkFlowState.APP_INIT) {
			this.progressModal.show();
		}		
		
		switch (wfState) {
			case WorkFlowState.SUCCESS:
				setTimeout(()=>{ this.progressModal.hide() }, 1000);
				break;
			case WorkFlowState.CNB2LP_ERR:
			case WorkFlowState.LILYPOND_ERR:
			case WorkFlowState.MIDI2MP3_ERR:
				this.progressModal.hide();
				break;			 
		}
    }		
		
}
