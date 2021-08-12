import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FormioDialogComponent } from "./formio-dialog.component";

@Injectable()
export class FormioDialogHandler {
    dialogRef: MatDialogRef<FormioDialogComponent>;

    constructor(private dialog: MatDialog) {}

    showDialog() {
        this.dialogRef = this.dialog.open(FormioDialogComponent);
    }
}