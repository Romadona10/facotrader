import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trade {
  _id?: string;
  date: string;
  symbol: string;
  entryPrice: number;
  currentPrice: number;
  roi: number;
}

@Injectable({
  providedIn: 'root'
})
export class TradingJournalService {
  private apiUrl = 'http://localhost:3000/api/trades';

  constructor(private http: HttpClient) { }

  getTradingHistory(): Observable<Trade[]> {
    return this.http.get<Trade[]>(this.apiUrl);
  }

  addTrade(trade: Trade): Observable<Trade> {
    return this.http.post<Trade>(this.apiUrl, trade);
  }
  updateTrade(id:string,trade:Trade):Observable<Trade>{
      return this.http.put<Trade>(`${this.apiUrl}/${id}`,trade)
  }
}
