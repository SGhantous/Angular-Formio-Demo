import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formio-dialog',
  templateUrl: './formio-dialog.component.html',
  styleUrls: ['./formio-dialog.component.scss']
})
export class FormioDialogComponent implements OnInit {

  form: Object = {
    components: []
  };

  options: Object = {
    submitMessage: "",
    disableAlerts: true,
    noAlerts: true
  }

  constructor(public dialogRef: MatDialogRef<FormioDialogComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
