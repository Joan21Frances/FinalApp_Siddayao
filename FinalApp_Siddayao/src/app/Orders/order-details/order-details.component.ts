import { Component,Input,OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router';

import { OrderService } from '../order.service';
import { Location } from '@angular/common';
import { OrderMain } from '../order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @Input()order?:OrderMain;
  orders:OrderMain[]=[];
   selectOrder?:OrderMain;
   onSelect(order:OrderMain):void{
     this.selectOrder=order;
   }
   constructor(private route:ActivatedRoute,
   private service:OrderService,
   private location:Location  ) { 
     
   }
   ngOnInit(): void {
      this.getOrder();
    }

    goBack():void{
      this.location.back();
    }
    add(email:string):void{
      email=email.trim();
      if(!email){return;}
      this.service.addOrder({ email } as unknown as OrderMain)
      .subscribe(order=>{
        this.orders.push(order);
      });
    }
    save(): void {
      if(this.order){
        this.service.updateOrder(this.order)
        .subscribe(() =>this.goBack());
      }
    }
    getOrder():void{
       const id=Number(this.route.snapshot.paramMap.get('id'));
       this.service.getOrder(id).subscribe(order =>this.order=order)
     }
    
   }
  