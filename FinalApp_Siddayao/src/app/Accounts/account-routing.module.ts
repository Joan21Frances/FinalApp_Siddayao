import { NgModule } from '@angular/core';
import {RouterModule, Routes }from '@angular/router';


import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountListComponent } from './account-list/account-list.component';

const accountRoutes: Routes=[
    {path: 'account', redirectTo: '/account'},
    {path : 'accounts/:id', redirectTo: '/accounts/:id'},
    {path: 'account', component: AccountListComponent},
    {path: 'accounts/:id', component: AccountDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AccountRoutingModule { }
