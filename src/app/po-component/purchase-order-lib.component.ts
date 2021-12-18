import { animate, style, transition, trigger } from '@angular/animations';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PurchaseOrderLibService } from './purchase-order-lib.service';
import  polist  from './poList'

@Component({
  selector: 'PurchaseOrderLib',
  templateUrl: './purchase-order-lib.component.html',
  styleUrls: ['./purchase-order-lib.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1.0s', style({ opacity: 0 }))
      ]),
    ])
  ]
})



export class PurchaseOrderLibComponent implements OnInit {

 
  @Input() configData: any = {}
  @ViewChild(CdkVirtualScrollViewport) public viewPorts!: CdkVirtualScrollViewport;
  public purchaseItemsObservable: any[] = []
  loadingFlag= false;
  constructor(private purchaseOrderLibService: PurchaseOrderLibService) { }

  ngOnInit() {
    const url = this.configData.url;
    const option = this.configData.option
    this.loadingFlag = true
    if(url) {
      this.purchaseOrderLibService.getPurchaseOrder(url, option).subscribe(res => {
        this.purchaseItemsObservable = res.data
        this.loadingFlag = false
      })
    } else {
      this.purchaseItemsObservable = polist
      this.loadingFlag = false
    }
  }

}
