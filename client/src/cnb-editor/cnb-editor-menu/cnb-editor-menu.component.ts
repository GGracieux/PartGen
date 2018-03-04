// Imports core
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'cnb-editor-menu',
    styleUrls: ['./cnb-editor-menu.component.css'],
    templateUrl: './cnb-editor-menu.component.html'
})

export class CnbEditorMenuComponent {

	// Evenement pour signaler un click menu
	@Output() menuClicked = new EventEmitter<string>();

	// Gestion du click menu
    public menuClick(action:string) {
    	this.menuClicked.emit(action);
    } 
	
}
