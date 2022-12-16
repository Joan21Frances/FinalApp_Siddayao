import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InMemoryDataService } from '../in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule}from 'angular-in-memory-web-api';
import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
  ],
  declarations: [
    OrderListComponent,
    OrderDetailsComponent
  ]
})
export class OrderModule {}