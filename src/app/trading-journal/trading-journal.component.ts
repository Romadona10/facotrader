import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TradingJournalService, Trade } from '../trading-journal.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-trading-journal',
  templateUrl: './trading-journal.component.html',
  styleUrls: ['./trading-journal.component.scss']
})
export class TradingJournalComponent implements OnInit {

  tradeForm: FormGroup;
  dateFilterForm!: FormGroup;
  loadingMessage: string = 'Please be patient while we fetch your trading history...';
  loading: boolean = false;
  trades: Trade[] = [];
  filteredTrades: Trade[] = [];
  tradingJournal: Trade[] = [];
  displayedColumns: string[] = ['date', 'symbol', 'entryPrice', 'currentPrice', 'roi','actions'];
  editingTrade: Trade | null = null;

  constructor(private fb: FormBuilder, private tradingJournalService: TradingJournalService, private snackBar: MatSnackBar) {
    this.tradeForm = this.fb.group({
      date: ['', Validators.required],
      symbol: ['', Validators.required],
      entryPrice: [0, [Validators.required, Validators.min(0)]],
      currentPrice: [0, [Validators.required, Validators.min(0)]],
      roi: [0, [Validators.required, Validators.min(-100), Validators.max(100)]]
    });
    this.dateFilterForm = this.fb.group({
      startDate: '',
      endDate: ''
    });
  }

  ngOnInit(): void {
    this.loadTradingHistory();
  }

  // onSubmit(): void {
  //   if (this.tradeForm.valid) {
  //     const newTrade: Trade = this.tradeForm.value;
  //     this.tradingJournalService.addTrade(newTrade).subscribe(() => {
  //       this.loadTradingHistory();
  //       this.tradeForm.reset();
  //     });
  //   }
  // }

  onSubmit(): void {
    if (this.tradeForm.valid) {
      if (this.editingTrade) {
        this.updateTrade();
      } else {
        this.addTrade();
      }
    }
  }

  editTrade(trade: Trade): void {
    this.editingTrade = trade;
    this.tradeForm.patchValue(trade);
  }

  async loadTradingHistory(): Promise<void> {
    this.loading = true;

    // Ensure the spinner is displayed for at least 5 seconds
    const delay = new Promise(resolve => setTimeout(resolve, 5000));

    try {
      const tradesPromise = this.tradingJournalService.getTradingHistory().toPromise();
      const trades = await Promise.all([tradesPromise, delay]).then(values => values[0]);

      this.trades = trades as Trade[];
      this.filteredTrades = trades as Trade[];
    } catch (error) {
      console.error('Error loading trades:', error);
      this.snackBar.open('Error loading trades. Please try again later.', 'Close', {
        duration: 3000,
      });
    } finally {
      this.loading = false;
    }
  }

  updateTrade(): void {
    if (this.editingTrade && this.editingTrade._id) {
      this.loading = true;
      this.loadingMessage = 'Uploading the edited trade history...';
      this.tradingJournalService.updateTrade(this.editingTrade._id, this.tradeForm.value).subscribe(() => {
        this.loadTradingHistory().then(() => {
          this.tradeForm.reset();
          this.editingTrade = null;
          // Introduce a delay before setting loading to false and showing the snackbar
          setTimeout(() => {
            this.loading = false;
            this.snackBar.open('Trading journal updated.', 'Close', {
              duration: 5000,
            });
          }, 4000); // 4 seconds delay
        });
      }, error => {
        console.error('Error updating trade:', error);
        this.loading = false;
      });
    }
  }
  

  addTrade(): void {
    this.loading = true;
    this.tradingJournalService.addTrade(this.tradeForm.value).subscribe(() => {
      this.loadTradingHistory();
      this.tradeForm.reset();
      this.editingTrade = null;
      this.loading = false;
    }, error => {
      console.error('Error adding trade:', error);
      this.loading = false;
    });
  }

  applyDateFilter(): void {
    if (this.dateFilterForm.valid) {
      this.loading = true;
      const { startDate, endDate } = this.dateFilterForm.value;

      console.log('Filtering trades from', startDate, 'to', endDate); // Debugging

      this.filteredTrades = this.trades.filter(trade => {
        const tradeDate = new Date(trade.date);
        const isAfterStartDate = !startDate || new Date(startDate) <= tradeDate;
        const isBeforeEndDate = !endDate || new Date(endDate) >= tradeDate;
        return isAfterStartDate && isBeforeEndDate;
      });

      console.log('Filtered Trades:', this.filteredTrades); // Debugging

      this.loading = false;
    } else {
      console.log('Date Filter Form is invalid'); // Debugging
    }
  }

}
