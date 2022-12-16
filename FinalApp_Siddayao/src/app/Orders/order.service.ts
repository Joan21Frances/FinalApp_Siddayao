import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError,tap } from "rxjs/operators";
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { MessageService } from './message.service';
import { OrderMain } from "./order";
import { ORDERSAMP } from "./orders";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private ordersUrl='api/orders';

    httpOptions={
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    getOrders(): Observable<OrderMain[]>{
    const items=of(ORDERSAMP);
    return this.http.get<OrderMain[]>(this.ordersUrl)
    .pipe(
      tap(_=>this.log('fetch orders')),
      catchError(this.handleError<OrderMain[]>('getOrders',[])));
    }
    getOrder(id:number): Observable<OrderMain>{
     const url=`${this.ordersUrl}/${id}`;
      return this.http.get<OrderMain>(url)
      .pipe(
        tap(_=>this.log(`fetched order id=${id}`)),
        catchError(this.handleError<OrderMain>(`getOrder id=${id}`))
      );
    }
  
    updateOrder(order: OrderMain):Observable<any> {
      return this.http.put(this.ordersUrl,order, this.httpOptions).pipe(
        tap(_=>this.log(`updated order id=${order.id}`)),
        catchError(this.handleError<any>('updateOrder'))
      )
    }
      addOrder(email:OrderMain):Observable<OrderMain>{
        return this.http.post<OrderMain>(this.ordersUrl, email,this.httpOptions).pipe(
          tap((newOrder:OrderMain)=>this.log(`added order w/ id=${newOrder.id}`)),
          catchError(this.handleError<OrderMain>('addOrder'))
        );
      }
    deleteOrder(id:number):Observable<OrderMain>{
      const url = `${this.ordersUrl}/${id}`;
      return this.http.delete<OrderMain>(url,this.httpOptions).pipe(
        tap(_=>this.log(`deleted order id=${id}`)),
        catchError(this.handleError<OrderMain>('deleteHero'))
      )
    }
    private handleError<T>(operation = 'operation',result?:T){
      return (error:any):Observable<T>=>{
        console.error(error);
        this.log(`$(operation}failed):${error.message}`);
        return of (result as T);
      }
    }
    private log(message: string) {
      this.messageService.add(`OrderService:${message}`);
    }
    constructor(
      private http:HttpClient,
      private messageService:MessageService,
    ) { }
  }
  