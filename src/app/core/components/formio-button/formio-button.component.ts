import { Component, OnInit } from '@angular/core';
import { FormioDialogHandler } from '../formio-dialog/formio-dialog-handler';

@Component({
  selector: 'app-formio-button',
  templateUrl: './formio-button.component.html',
  styleUrls: ['./formio-button.component.scss']
})
export class FormioButtonComponent implements OnInit {

  constructor(private dialogHandler: FormioDialogHandler) { }

  ngOnInit(): void {
  }

  openFormioDialog() {
    this.dialogHandler.showDialog();
  }

}
