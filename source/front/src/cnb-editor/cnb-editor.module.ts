// Imports Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports du module
import { CnbEditorComponent } from './cnb-editor/cnb-editor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CnbEditorComponent],
  exports: [CnbEditorComponent]
})
export class CnbEditorModule {}