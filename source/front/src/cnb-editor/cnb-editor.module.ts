// Imports Core
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Imports Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

// Imports du module
import {CnbEditorMenuComponent} 	from './cnb-editor-menu/cnb-editor-menu.component';
import {CnbEditorInputComponent} 	from './cnb-editor-input/cnb-editor-input.component';
import {CnbEditorPdfComponent} 		from './cnb-editor-pdf/cnb-editor-pdf.component';
import {CnbEditorMp3Component} 		from './cnb-editor-mp3/cnb-editor-mp3.component';
import {CnbEditorLogComponent} 		from './cnb-editor-log/cnb-editor-log.component';
import {CnbEditorComponent} 		from './cnb-editor/cnb-editor.component';

@NgModule({
  imports: [
	CommonModule, 
	MatToolbarModule, 
	MatIconModule	
	],
  declarations: [
	CnbEditorComponent,
	CnbEditorMenuComponent,
	CnbEditorInputComponent,
	CnbEditorPdfComponent,
	CnbEditorMp3Component,
	CnbEditorLogComponent
	],
  exports: [CnbEditorComponent]
})
export class CnbEditorModule {}