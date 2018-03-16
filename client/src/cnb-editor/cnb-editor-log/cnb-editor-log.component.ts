// Imports core
import {Component, Input, ViewChild} from '@angular/core';

// Imports du composant
import {LogEntry, logLevel} from './cnb-editor-log.interface';

// Import enum du workflow de generation des données
import {WorkFlowState} from '../cnb-editor/cnb-editor.workflow';

@Component({
    selector: 'cnb-editor-log',
    styleUrls: ['./cnb-editor-log.component.css'],
    templateUrl: './cnb-editor-log.component.html'
})

export class CnbEditorLogComponent {	

	// Log Modal handler
	@ViewChild('logModal') public logWindow;

	// Log data
	@Input() content: LogEntry[] = [];
	
	// Is current workflow state an error
	public stateError:boolean = false;
	public stateSuccess:boolean = false;
	
	private isErrorState(wfState: WorkFlowState) {
		switch (wfState) {
			case WorkFlowState.CNB2LP_ERR:
			case WorkFlowState.LILYPOND_ERR:
			case WorkFlowState.MIDI2MP3_ERR:
				return true;
		}		
		return false;
	}

	// Handles workflow state changes
	private _wfState: WorkFlowState;	
	
	@Input() set wfState(wfState: WorkFlowState) {
		this._wfState = wfState;
		this.stateError = this.isErrorState(wfState);
		this.stateSuccess = (wfState == WorkFlowState.SUCCESS);
		if (this.stateError) {
			this.logWindow.show();
		}
	}	

}
