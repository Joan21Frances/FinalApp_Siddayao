import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError,tap } from "rxjs/operators";
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { MessageService } from './message.service';
import { AccountMain } from "./account";
import { ACCOUNTSAMP } from "./accounts";

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private accountsUrl='api/accounts';

httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
};

    getAccounts(): Observable<AccountMain[]>{
        //const orders=of(ORDERSAMP);
        return this.http.get<AccountMain[]>(this.accountsUrl)
        .pipe(
          tap(_=>this.log('Retrieved Orders')),
          catchError(this.handleError<AccountMain[]>('getOrders',[])));
        }
        private handleError<T>(operation = 'operation',result?:T){
          return (error:any):Observable<T>=>{
            console.error(error);
            this.log(`${operation}failed:${error.message}`);
            return of (result as T);
          }
        }
    
    getAccountMain(id:number): Observable<AccountMain>{
     const url=`${this.accountsUrl}/${id}`;
      return this.http.get<AccountMain>(url)
      .pipe(
        tap(_=>this.log(`fetched account id=${id}`)),
        catchError(this.handleError<AccountMain>(`getAccountMain id=${id}`))
      );
    }
    updateAccountMain(account: AccountMain):Observable<any> {
      return this.http.put(this.accountsUrl,account, this.httpOptions).pipe(
        tap(_=>this.log(`updated account id=${account.id}`)),
        catchError(this.handleError<any>('updateAccountMain'))
      )
    }
      addAccountMain(email:AccountMain):Observable<AccountMain>{
        return this.http.post<AccountMain>(this.accountsUrl, email,this.httpOptions).pipe(
          tap((newAccountMain:AccountMain)=>this.log(`added account w/ id=${newAccountMain.id}`)),
          catchError(this.handleError<AccountMain>('addAccountMain'))
        );
      }
    deleteAccountMain(id:number):Observable<AccountMain>{
      const url = `${this.accountsUrl}/${id}`;
      return this.http.delete<AccountMain>(url,this.httpOptions).pipe(
        tap(_=>this.log(`deleted account id=${id}`)),
        catchError(this.handleError<AccountMain>('deleteHero'))
      )
    }


private log(message: string) {
    this.messageService.add(`AccountService:${message}`);
  }
  constructor(
    private http:HttpClient,
    private messageService:MessageService,
  ) { }

    } 