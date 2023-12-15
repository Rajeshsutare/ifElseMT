import { Component, OnInit } from '@angular/core';
import {  MoneyStatistics } from 'src/app/shared/models/interface';
import { BalanceService } from 'src/app/shared/services/balance.service';



@Component({
  selector: 'app-money-statistics',
  templateUrl: './money-statistics.component.html',
  styleUrls: ['./money-statistics.component.scss']
})
export class MoneyStatisticsComponent implements OnInit {
public moneyStatistic !:MoneyStatistics;
Highcharts = require('highcharts');
  constructor(private _balanceService:BalanceService) { }

  ngOnInit(): void {

    this._balanceService.getTransactionArray()
    .subscribe((res:any)=>{
        this.moneyStatistic=res.money_statistics;    
    })

    this.highCharts()
  }

  highCharts(){
    this.Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        xAxis: {
            categories: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        },
        series: [
            {
                name: 'Income',
                data: [30629, 26000, 10700, 40830, 30750, 45450, 36112, 23612, 23500,21411, 20712, 35712]
            },
            {
                name: 'Investment',
                data: [10108, 13600, 20500, 14100, 10718, 18700, 18450, 10112, 13612,24500, 14112, 10712]
            },
            {
                name: 'Expense',
                data: [5112, 13612, 25500, 14112, 10712, 30712, 40629, 26000, 10700, 17830, 20750, 14500]
            }
        ]
    });
  }
}
