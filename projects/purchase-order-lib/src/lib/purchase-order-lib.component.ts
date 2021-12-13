import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'PurchaseOrderLib',
  templateUrl: './purchase-order-lib.component.html',
  styleUrls: ['./purchase-order-lib.component.scss']
})
export class PurchaseOrderLibComponent {

  @Input() purchaseItemsObservable: any[] = []
  @Input() truckCenter: any = {}
  @ViewChild(CdkVirtualScrollViewport) public viewPorts!: CdkVirtualScrollViewport;

}
