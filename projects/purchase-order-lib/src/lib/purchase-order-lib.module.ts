import { PurchaseOrderLibComponent } from './purchase-order-lib.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule} from '@angular/material/card';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderListComponent } from './order-list/order-list.component';


@NgModule({
  declarations: [
    PurchaseOrderLibComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    ScrollingModule,
  ],
  exports: [
    PurchaseOrderLibComponent
  ]
})
export class PurchaseOrderLibModule { }
