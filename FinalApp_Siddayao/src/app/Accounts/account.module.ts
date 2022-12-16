import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InMemoryDataService } from '../in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule}from 'angular-in-memory-web-api';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountListComponent } from './account-list/account-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
  ],
  declarations: [
    AccountListComponent,
    AccountDetailsComponent
  ]
})
export class AccountModule {}