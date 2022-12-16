
import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {AccountService} from '../account.service';
import {AccountMain} from '../account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  @Input()account?:AccountMain;
  accounts:AccountMain[]=[];
   selectAccount?:AccountMain;
   onSelect(account:AccountMain):void{
     this.selectAccount=account;
   }
   constructor(private route:ActivatedRoute,
   private service:AccountService,
   private location:Location  ) { 
     
   }
   ngOnInit(): void {
      this.getAccount();
    }

    goBack():void{
      this.location.back();
    }
    add(email:string):void{
      email=email.trim();
      if(!email){return;}
      this.service.addAccountMain({ email } as unknown as AccountMain)
      .subscribe(account=>{
        this.accounts.push(account);
      });
    }
    save(): void {
      if(this.account){
        this.service.updateAccountMain(this.account)
        .subscribe(() =>this.goBack());
      }
    }
    getAccount():void{
       const id=Number(this.route.snapshot.paramMap.get('id'));
       this.service.getAccountMain(id).subscribe(account =>this.account=account)
     }
    
   }
  