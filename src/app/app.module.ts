import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CnbEditorModule } from '../cnb-editor/cnb-editor.module';
import { HttpClientModule } from '@angular/common/http';

import { Cnb2lpService } from '../services/cnb2lp/cnb2lp.service';
import { LilyPondAPI } from '../services/lilypond-api/lilypond-api.service';
import { Midi2mp3API } from '../services/midi2mp3-api/midi2mp3-api.service';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CnbEditorModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    Cnb2lpService,
  	LilyPondAPI,
  	Midi2mp3API
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
