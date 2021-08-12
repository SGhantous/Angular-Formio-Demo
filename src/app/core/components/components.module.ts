import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormioModule } from '@formio/angular';
import { LayoutComponent } from './layout/layout.component';
import { FormioButtonComponent } from './formio-button/formio-button.component';
import { FormioDialogComponent } from './formio-dialog/formio-dialog.component';
import { FormioDialogHandler } from './formio-dialog/formio-dialog-handler';



@NgModule({
  declarations: [
    LayoutComponent,
    FormioButtonComponent,
    FormioDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormioModule
  ],
  exports: [
    LayoutComponent,
    FormioButtonComponent,
    FormioDialogComponent,
    FormioModule
  ],
  entryComponents: [
    FormioDialogComponent
  ],
  providers: [
    { provide: FormioDialogHandler, useClass: FormioDialogHandler, multi: false }
  ]
})
export class ComponentsModule { }
