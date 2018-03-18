// Imports Core
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';

// Imports ace mirror
import {AceEditorModule} from 'ng2-ace-editor';

// Imports Pdf Viewer
import {PdfViewerModule} from 'ng2-pdf-viewer';

// Import service de convertion CNB -> LP
import {Cnb2lpService} from '../services/cnb2lp/cnb2lp.service';

// Import des API
import {LilyPondAPI} from '../services/lilypond-api/lilypond-api.service';
import {Midi2mp3API} from '../services/midi2mp3-api/midi2mp3-api.service';

// Import Angular Material Boostrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Imports des composants du module
import {CnbEditorMenuComponent} 	from './cnb-editor-menu/cnb-editor-menu.component';
import {CnbEditorInputComponent} 	from './cnb-editor-input/cnb-editor-input.component';
import {CnbEditorPdfComponent} 		from './cnb-editor-pdf/cnb-editor-pdf.component';
import {CnbEditorMp3Component} 		from './cnb-editor-mp3/cnb-editor-mp3.component';
import {CnbEditorLogComponent} 		from './cnb-editor-log/cnb-editor-log.component';
import {CnbEditorProgressComponent} from './cnb-editor-progress/cnb-editor-progress.component';
import {CnbEditorFooterComponent} 	from './cnb-editor-footer/cnb-editor-footer.component';
import {CnbEditorComponent} 		from './cnb-editor/cnb-editor.component';

// Time format pipe
import {MinuteSecondsPipe} from './cnb-editor-mp3/cnb-editor-mp3.pipes';

@NgModule({
  imports: [
	CommonModule, 
	HttpModule,
	AceEditorModule,
	PdfViewerModule,
	MDBBootstrapModule.forRoot()
	],
  providers: [
  	Cnb2lpService,
  	LilyPondAPI,
  	Midi2mp3API
  ],
  declarations: [
	CnbEditorComponent,
	CnbEditorMenuComponent,
	CnbEditorInputComponent,
	CnbEditorPdfComponent,
	CnbEditorMp3Component,
	CnbEditorLogComponent,
	CnbEditorProgressComponent,
	CnbEditorFooterComponent,
    MinuteSecondsPipe
	],
  exports: [CnbEditorComponent]
})
export class CnbEditorModule {}