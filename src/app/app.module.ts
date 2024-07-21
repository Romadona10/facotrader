import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { TradechecksComponent } from './tradechecks/tradechecks.component';
import { MarketanalysisComponent } from './marketanalysis/marketanalysis.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TradingJournalComponent } from './trading-journal/trading-journal.component';
import { TradeChecksDialogComponent } from './trade-checks-dialog/trade-checks-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { TradingJournalModalComponent } from './trading-journal-modal/trading-journal-modal.component';
import { LearnChartComponent } from './learn-chart/learn-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TradechecksComponent,
    MarketanalysisComponent,
    LoginComponent,
    HomePageComponent,
    TradingJournalComponent,
    TradeChecksDialogComponent,
    TradingJournalModalComponent,
    LearnChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatOptionModule,
    MatSelectModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
