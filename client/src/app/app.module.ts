import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CnbEditorModule } from '../cnb-editor/cnb-editor.module';
import { HttpClientModule } from '@angular/common/http';
import { PartGenAPI } from '../partgen-api/partgen-api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CnbEditorModule,
    HttpClientModule
  ],
  providers: [PartGenAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
