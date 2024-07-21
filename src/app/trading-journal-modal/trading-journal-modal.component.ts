import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-trading-journal-modal',
  templateUrl: './trading-journal-modal.component.html',
  styleUrls: ['./trading-journal-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TradingJournalModalComponent {

  userIdForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TradingJournalModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {
    this.userIdForm = this.fb.group({
      userId: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userIdForm.valid) {
      const userId = this.userIdForm.value.userId;
      if (this.authService.verifyUserId(userId)) {
        this.dialogRef.close(true);
      } else {
        this.snackBar.open('Invalid USER ID', 'Retry', {
          duration: 8000,  // 8 seconds
          panelClass: ['error-snackbar']
        });
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
  
}
