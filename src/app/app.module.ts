import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PurchaseOrderLibComponent } from './po-component/purchase-order-lib.component';
import { OrderListComponent } from './po-component/order-list/order-list.component';
import { createCustomElement } from '@angular/elements';
// import from Local after build projects/purchase-order-lib. ng build PurchaseOrderLib
// import { PurchaseOrderLibModule } from 'PurchaseOrderLib';
// import from npm after npm publish
// import { PurchaseOrderLibModule } from 'purchase-order-lib';


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
    BrowserAnimationsModule,
  ],
  providers: [],
  entryComponents: [
    PurchaseOrderLibComponent,
    OrderListComponent
  ],
  // bootstrap: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(
    private injector: Injector
  ) {
  }
  ngDoBootstrap(): void {
    const customElement = createCustomElement(PurchaseOrderLibComponent, {injector: this.injector});
    customElements.define('po-list', customElement);
  }
 }
