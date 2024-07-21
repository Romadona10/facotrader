import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup,FormArray } from '@angular/forms';
import { TradeChecksDialogComponent } from '../trade-checks-dialog/trade-checks-dialog.component';

interface Option {
  label: string;
  
}
@Component({
  selector: 'app-tradechecks',
  templateUrl: './tradechecks.component.html',
  styleUrls: ['./tradechecks.component.scss']
})
export class TradechecksComponent {
  tradeCheckForm!:FormGroup
  selectedOptions: boolean[] = [];
  private timeoutId: any;
  // conditionMet: boolean | null = null;
  // selectedOption: string | null = null;
  options:Option[] = [
    {
      label: 'Bullish marubozu candle at a key level', },
    { label: 'Bullish marubozu candle directly close to the MA' },
    { label: 'One or two hammers at a support or key level' },
    { label: '200MA and 20MA very close to each other' },
    { label: 'Condition Met' },
    { label: 'Condition Met' },
    { label: 'Condition Not Met' },
    { label: 'One or two hammers not at a support or key level' },
    { label: 'Inverted hammer not at a support or key level' }
  ];

 

  constructor(private fb: FormBuilder,public dialog: MatDialog) {
    this.tradeCheckForm = this.fb.group({
      options: this.fb.array(this.options.map(() => false))
    });
   }

  // checkCondition() {
  //   if (this.selectedOption === 'yes') {
  //     this.conditionMet = true;
  //   } else {
  //     this.conditionMet = false;
  //   }

  //   this.openDialog();
  // }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(TradeChecksDialogComponent, {
  //     data: { conditionMet: this.conditionMet }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  ngOnInit(): void {
   
    
  }

  checkCondition() {
    clearTimeout(this.timeoutId);

    const selectedOptions = this.tradeCheckForm.value.options.filter((checked: boolean) => checked).length;

    if (selectedOptions >= 3) {
      this.openDialog(true, 2000);
    } else {
      this.openDialog(false, 10000);
    }
  }

  
  openDialog(conditionMet: boolean,delay:number): void {
    const dialogRef = this.dialog.open(TradeChecksDialogComponent, {
      data: { conditionMet: conditionMet },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  

}
