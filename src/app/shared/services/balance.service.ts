import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  public postUrl:string=`${environment.baseUrl}`;

  constructor(private _http:HttpClient) { }


  getAllData():Observable<Array<Ipost>>{
   return this._http.get<Array<Ipost>>(this.postUrl)
    .pipe(
      map(res=>{
        console.log(res);
        let allData: Array<Ipost>=[];
        for (const key in res) {
          allData.push({...res[key], id:key})
          }
          return allData
      })
    )
  }

  getTransactionArray():Observable<Ipost>{
    return this._http.get<Ipost>(this.postUrl)
    .pipe(
      map((res:any)=>{
        console.log(res);
        for (const key in res) {
          return res
        }
        
      })
    )
  }

}
