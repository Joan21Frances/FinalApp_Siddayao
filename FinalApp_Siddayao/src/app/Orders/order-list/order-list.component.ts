import { Component,Input,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OrderService } from '../order.service';
import { OrderMain } from '../order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
title="ORDER LIST"
  orders:OrderMain[]=[];
  @Input() order?: OrderMain;
  selectorder?:OrderMain;
  constructor(
    private route: ActivatedRoute,
    private service:OrderService,
    private location:Location
  ) { }
  
  ngOnInit(): void {
    this.getOrder();
  }
  
  goBack():void{
    this.location.back();
  }
  save(): void {
    if(this.order){
      this.service.updateOrder(this.order)
      .subscribe(() =>this.goBack());
    }
  }
  getOrder():void{
   this.service.getOrders().
    subscribe(orders=>this.orders=orders);
  }
  add(email:string):void{
    email=email.trim();
    if(!email){return;}
    this.service.addOrder({ email } as unknown as OrderMain)
    .subscribe(order=>{
      this.orders.push(order);
    });
  }
  delete(order:OrderMain): void{
    this.confirmDelete();
    this.orders=this.orders.filter(i=>i!==order);
    this.service.deleteOrder(order.id).subscribe();
  }
  confirmDelete(){
    alert('Are you sure you want to delete this Item?');
  }
  }

