// Imports core
import {Component, Input} from '@angular/core';

// Imports du composant
import {LogEntry, logLevel} from './cnb-editor-log.interface';

@Component({
    selector: 'cnb-editor-log',
    styleUrls: ['./cnb-editor-log.component.css'],
    templateUrl: './cnb-editor-log.component.html'
})

export class CnbEditorLogComponent {

    // Log content
    private _content: LogEntry[] = [];

    // Log content : Getter
    get content(): LogEntry[] {
        return this._content;
    }

    // Log content : Setter
    @Input()
    set content(content: LogEntry[]) {
        this._content = content;
        this.errorLevel = this.getMaxErrorLevel();
    }

    // Modal error level
    public errorLevel: number = -1;

    // Gets max error level from all log level
    getMaxErrorLevel(): number {
        let currLevel = -1;
        let len = this._content.length;
        for (let i = 0; i < len; i++) {
            currLevel = Math.max(currLevel, this.getErrLevelValue(this._content[i].level));
        }
        return currLevel;
    }

    // Return an int for each level for comparison
    getErrLevelValue(level: logLevel): number {
        switch (level) {
            case logLevel.success:
                return -1;
            case logLevel.info:
                return 0;
            case logLevel.warning:
                return 1;
            case logLevel.error:
                return 2;
        }
        return 0;
    }

}
