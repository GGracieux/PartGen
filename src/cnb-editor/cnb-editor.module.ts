// Imports Core
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';

// Imports code mirror
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CodemirrorModule} from 'ng2-codemirror';

// Imports Pdf Viewer
import {PdfViewerModule} from 'ng2-pdf-viewer';

// Imports CNB to Lilypond convertion service
import {Cnb2lpService} from '../services/cnb2lp/cnb2lp.service';

// Lilypond and Midi to Mp3 API import
import {LilyPondAPI} from '../services/lilypond-api/lilypond-api.service';
import {Midi2mp3API} from '../services/midi2mp3-api/midi2mp3-api.service';

// Import Angular Material Boostrap
import {MDBBootstrapModule} from 'angular-bootstrap-md';

// Imports module components
import {CnbEditorMenuComponent} 		from './cnb-editor-menu/cnb-editor-menu.component';
import {CnbEditorInputComponent} 		from './cnb-editor-input/cnb-editor-input.component';
import {CnbEditorPdfComponent} 			from './cnb-editor-pdf/cnb-editor-pdf.component';
import {CnbEditorPdfControlsComponent} 	from './cnb-editor-pdf-controls/cnb-editor-pdf-controls.component';
import {CnbEditorMp3Component} 			from './cnb-editor-mp3/cnb-editor-mp3.component';
import {CnbEditorLogComponent} 			from './cnb-editor-log/cnb-editor-log.component';
import {CnbEditorComponent} 			from './cnb-editor/cnb-editor.component';

// Time format pipe
import {MinuteSecondsPipe} from './cnb-editor-mp3/cnb-editor-mp3.pipes';

@NgModule({
  imports: [
	CommonModule, 
	HttpModule,
	FormsModule,
	CodemirrorModule,
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
	CnbEditorPdfControlsComponent,
	CnbEditorMp3Component,
	CnbEditorLogComponent,
    MinuteSecondsPipe
	],
  exports: [CnbEditorComponent]
})
export class CnbEditorModule {}