import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent  {
  @Input() public purchaseorder: any = {};
  @Output() public poChange = new EventEmitter();
  click(event:any) {
    console.log("event  emit")
    this.poChange.emit(event)
  }
}
