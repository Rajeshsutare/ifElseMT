import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './shared/components/left-nav/left-nav.component';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { FirstStaticColumnComponent } from './shared/components/first-static-column/first-static-column.component';
import { BalanceSectionComponent } from './shared/components/balance-section/balance-section.component';
import { TotalBalanceComponent } from './shared/components/balance-section/total-balance/total-balance.component';
import { MoneyStatisticsComponent } from './shared/components/balance-section/money-statistics/money-statistics.component';
import {HttpClientModule} from '@angular/common/http';
import { TransactionHistoryComponent } from './shared/components/balance-section/transaction-history/transaction-history.component'


@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    TopNavComponent,
    DashboardComponent,
    FirstStaticColumnComponent,
    BalanceSectionComponent,
    TotalBalanceComponent,
    MoneyStatisticsComponent,
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
