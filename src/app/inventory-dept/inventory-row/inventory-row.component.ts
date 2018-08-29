import { Component, OnInit } from '@angular/core';
import { Product } from '../inventory/inventory.component';

@Component({
  selector: 'app-inventory-row',
  // 输入绑定
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['product'],
  // 指定宿主class属性
  // tslint:disable-next-line:use-host-property-decorator
  host: {'class': 'item'},
  templateUrl: './inventory-row.component.html',
  styleUrls: ['./inventory-row.component.css']
})
export class InventoryRowComponent implements OnInit {
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
