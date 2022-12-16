import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule}from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component';

import { OrderModule } from './Orders/order.module';
import { AccountModule } from './Accounts/account.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OrderModule,
    AccountModule,
    HttpClientModule,
    RouterModule.forRoot([{path: 'home',component: HomePageComponent}]),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
   
     
  
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    
   
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
