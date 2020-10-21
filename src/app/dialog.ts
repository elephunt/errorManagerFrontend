import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ErrorModel} from './errorModel';


/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-dialog-error',
  templateUrl: 'dialog-overiview-example.html',
})
export class AppDialogErrorComponent {

  code: string;
  reason: string;
  status: string;
  traceId: string;
  localError: ErrorModel;


  constructor(
    public dialogRef: MatDialogRef<AppDialogErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ErrorModel) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void{
    this.localError = {
     code:  this.code, comments: [], reason: this.reason, referenceError: '', status: this.status, traceId: this.traceId
    };
    this.dialogRef.close(this.localError);
  }

}
