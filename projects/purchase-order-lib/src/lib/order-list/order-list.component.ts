import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent  {
  @Input() purchaseorder: any = {};
  @Input() truckCenter: any = {};
 
}
