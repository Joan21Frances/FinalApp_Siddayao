import { NgModule } from '@angular/core';
import {RouterModule, Routes }from '@angular/router';

import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListComponent } from './order-list/order-list.component';

const orderRoutes: Routes=[
  {path: 'order', redirectTo: '/order'},
  {path : 'orders/:id', redirectTo: '/orders/:id'},
  {path: 'order', component: OrderListComponent},
  {path: 'orders/:id', component: OrderDetailsComponent}
];

@NgModule({
imports: [
  RouterModule.forChild(orderRoutes)
],
exports:[
  RouterModule
]
})
export class OrderRoutingModule { }
