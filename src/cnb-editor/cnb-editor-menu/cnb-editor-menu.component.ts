// Imports Core
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'cnb-editor-menu',
    styleUrls: ['./cnb-editor-menu.component.css'],
    templateUrl: './cnb-editor-menu.component.html'
})

export class CnbEditorMenuComponent {

    @Input() disable: boolean = false;

	@Output() menuClicked = new EventEmitter<string>();

    public menuClick(action:string) {
    	this.menuClicked.emit(action);
    } 

}
