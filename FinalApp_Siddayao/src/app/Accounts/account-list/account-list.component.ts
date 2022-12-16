import { Component,Input,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {AccountService} from '../account.service';
import {AccountMain} from '../account';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  providers:[AccountService]
})
export class AccountListComponent implements OnInit {
  page_title="ACCOUNT LISTS"

  accounts:AccountMain[]=[];
  @Input() account?: AccountMain;
  selectedaccount?:AccountMain;
  constructor(
    private service: AccountService,
    private location:Location,
    private route: ActivatedRoute){
    }  
      ngOnInit(): void {
      this.getAccount();
    }
    
    goBack():void{
      this.location.back();
    }
    save(): void {
      if(this.account){
        this.service.updateAccountMain(this.account)
        .subscribe(() =>this.goBack());
      }
    }
    getAccount() {
      this.service.getAccounts().
      subscribe(accounts=>this.accounts=accounts);
        }
        add(email:string):void{
          email=email.trim();
          if(!email){return;}
          this.service.addAccountMain({ email } as unknown as AccountMain)
          .subscribe(account=>{
            this.accounts.push(account);
          });
        }
        delete(account:AccountMain): void{
          this.confirmDelete();
          this.accounts=this.accounts.filter(i=>i!==account);
          this.service.deleteAccountMain(account.id).subscribe();
        }
        confirmDelete(){
          alert('Are you sure you want to delete this Item?');
        }
    }