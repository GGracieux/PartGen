import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CnbEditorModule } from '../cnb-editor/cnb-editor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	CnbEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
