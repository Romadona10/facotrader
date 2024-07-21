import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { TradechecksComponent } from './tradechecks/tradechecks.component';
import { MarketanalysisComponent } from './marketanalysis/marketanalysis.component';
import { TradingJournalComponent } from './trading-journal/trading-journal.component';
import { TradingJournalModalComponent } from './trading-journal-modal/trading-journal-modal.component';
import { LearnChartComponent } from './learn-chart/learn-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'home-page', component: AppComponent,canActivate:[AuthGuard] },
  { path: 'trade-checks', component: TradechecksComponent,canActivate:[AuthGuard]  },
  { path: 'market-analysis', component: MarketanalysisComponent,canActivate:[AuthGuard] },
  { path: 'user-verifier', component: TradingJournalModalComponent,canActivate:[AuthGuard] },
  { path: 'trading-journal', component: TradingJournalComponent,canActivate:[AuthGuard] },
  { path: 'candlestick-patterns', component: LearnChartComponent,canActivate:[AuthGuard] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
