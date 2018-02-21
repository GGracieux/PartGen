// Imports Core
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Imports Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

// Imports du module
import { CnbEditorComponent } from './cnb-editor/cnb-editor.component';

@NgModule({
  imports: [
	CommonModule, 
	MatToolbarModule, 
	MatIconModule
	],
  declarations: [CnbEditorComponent],
  exports: [CnbEditorComponent]
})
export class CnbEditorModule {}