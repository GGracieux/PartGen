// Imports core
import {Component, ViewChild, Input} from '@angular/core';

// Imports du composant
import {LogEntry} from './cnb-editor-log.interface';

@Component({
    selector: 'cnb-editor-log',
    styleUrls: ['./cnb-editor-log.component.css'],
    templateUrl: './cnb-editor-log.component.html'
})

export class CnbEditorLogComponent {

    // Log content
    @Input() content: LogEntry[];


    // Visible switch
    private _show;
    get show(): boolean {
        return this._show;
    }
    @Input() set show(show: boolean) {
        this._show = show;
        this.setVisibility(show);
    }

    // Show / Hide Modal
    @ViewChild('demoBasic') public contentModal;
    private setVisibility(visible: boolean) {
        if (visible) {
        //
            //    this.contentModal.show();
        } else {
            //this.contentModal.hide();
        }
    }


}
