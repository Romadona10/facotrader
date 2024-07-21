import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trade-checks-dialog',
  templateUrl: './trade-checks-dialog.component.html',
  styleUrls: ['./trade-checks-dialog.component.scss']
})
export class TradeChecksDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { conditionMet: boolean },
  private dialogRef: MatDialogRef<TradeChecksDialogComponent>) { }

  closeDialog():void{
    this.dialogRef.close();
  }

}
