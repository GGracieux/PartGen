// Imports core
import {Component, Input} from '@angular/core';

// Imports du composant
import {LogEntry} from './cnb-editor-log.interface';

@Component({
    selector: 'cnb-editor-log',
    styleUrls: ['./cnb-editor-log.component.css'],
    templateUrl: './cnb-editor-log.component.html'
})

export class CnbEditorLogComponent {

    // Contenu des logs
    @Input() content: LogEntry[];

}
