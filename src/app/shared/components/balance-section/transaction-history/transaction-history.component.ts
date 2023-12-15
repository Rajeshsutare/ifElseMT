import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ipost, Transaction } from 'src/app/shared/models/interface';
import { BalanceService } from 'src/app/shared/services/balance.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

public transactions !:Array<Transaction>;
  constructor(private _transactionService:BalanceService) { }

  ngOnInit(): void {

    this._transactionService.getTransactionArray()
    .subscribe(res=>{
      this.transactions=res.transactions;
  })
  }
}
