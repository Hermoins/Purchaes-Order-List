import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'
import poData from '../poList';
import tcData from '../truckCenter'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Purchase-Order-Poc';
  public purchaseItemsObservable: any[] = poData;
  public truckCenter:any = tcData
  poLits = [];
  
  constructor(private appService: AppService) { }
  ngOnInit() {
    
    // console.log(this.purchaseItemsObservable)
    // const option = { queryType: 2, pageNumber: 1, pageSize: 10, poNumber: "", supplierStr: "", truckCenterId: 564, dateRange: 3 }
    // this.appService.getPurchaseOrder(option).subscribe(result => {
    //   this.poLits = result.data;
    // })
  }
 
}
