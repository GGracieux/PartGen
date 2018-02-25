// Imports Core
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Imports Material
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

// Imports ace mirror
import { AceEditorModule } from 'ng2-ace-editor';

// Imports Pdf Viewer
import { PdfViewerModule } from 'ng2-pdf-viewer';

// Imports du module
import {CnbEditorMenuComponent} 	from './cnb-editor-menu/cnb-editor-menu.component';
import {CnbEditorInputComponent} 	from './cnb-editor-input/cnb-editor-input.component';
import {CnbEditorPdfComponent} 		from './cnb-editor-pdf/cnb-editor-pdf.component';
import {CnbEditorMp3Component} 		from './cnb-editor-mp3/cnb-editor-mp3.component';
import {CnbEditorLogComponent} 		from './cnb-editor-log/cnb-editor-log.component';
import {CnbEditorFooterComponent} 	from './cnb-editor-footer/cnb-editor-footer.component';
import {CnbEditorComponent} 		from './cnb-editor/cnb-editor.component';

@NgModule({
  imports: [
	CommonModule, 
	MatGridListModule,
	MatToolbarModule, 	
	MatIconModule,
	AceEditorModule	,
	PdfViewerModule
	],
  declarations: [
	CnbEditorComponent,
	CnbEditorMenuComponent,
	CnbEditorInputComponent,
	CnbEditorPdfComponent,
	CnbEditorMp3Component,
	CnbEditorLogComponent,
	CnbEditorFooterComponent
	],
  exports: [CnbEditorComponent]
})
export class CnbEditorModule {}