import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/shared/models/interface';
import { BalanceService } from 'src/app/shared/services/balance.service';

@Component({
  selector: 'app-total-balance',
  templateUrl: './total-balance.component.html',
  styleUrls: ['./total-balance.component.scss']
})
export class TotalBalanceComponent implements OnInit {
public totalBalance!:Balance;

  constructor(private _balanceService:BalanceService) { }

  ngOnInit(): void {
    this._balanceService.getTransactionArray()
    .subscribe((res:any)=>{
      this.totalBalance=res.balance;
    })   
  }

}
