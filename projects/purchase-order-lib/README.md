# PurchaseOrderLib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

install
=======

With [npm](http://npmjs.org) do:

```
npm install purchase-order-lib
```


example
=======
After install
Use the template file As：
``` html
  <PurchaseOrderLib [configData]=configData></PurchaseOrderLib>

```

***
Provide a configuration file with URL and interface parameters
```ts
 export default {
    url: "https://localhost:44306/PurchaseOrder/GetOrders",
    option: {
        queryType: 2,
        pageNumber: 1,
        pageSize: 10,
        poNumber: "",
        supplierStr: "",
        truckCenterId: 564,
        dateRange: 3
    }
}
```
notes
=====

This module was written while sitting high above the ground in a tree.