import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
// Local import from projects/purchase-order-lib. 
// import { PurchaseOrderLibModule } from 'PurchaseOrderLib';
import { PurchaseOrderLibModule } from 'purchase-order-lib';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    ScrollingModule,
    BrowserAnimationsModule,
    PurchaseOrderLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
