// Imports core
import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'cnb-editor-pdf-controls',
    styleUrls: ['./cnb-editor-pdf-controls.component.css'],
    templateUrl: './cnb-editor-pdf-controls.component.html'
})

export class CnbEditorPdfControlsComponent {

    private zoomLevel: number = 1; 

    @Output() zoomChanged = new EventEmitter<number>();

    zoomMinus() {
        this.zoomLevel = Math.max(this.zoomLevel - 0.1, 0.1);
        this.zoomChanged.emit(this.zoomLevel);
    }

    zoomPlus() {
        this.zoomLevel = Math.min(this.zoomLevel + 0.1, 3);
        this.zoomChanged.emit(this.zoomLevel);
    }

}
