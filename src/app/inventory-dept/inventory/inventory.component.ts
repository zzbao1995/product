import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {
  @Input() products: Product[];
  private cureentProduct: Product;

  // 构造函数初始化商品信息
  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '../../../assets/resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '../../../assets/resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '../../../assets/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }

  // 控制台输出
  productWasSelected(product: Product): void {
    console.log('product was clicked: ', product.name);
  }

  // 【获取组件输出】商品展示组件输出click事件，调用clicked方法，商品被点击
  clicked(product: Product): void {
    this.cureentProduct = product;
    this.productWasSelected(product);
  }

  // 【向组件输入】判断产品是否被选中，向商品展示组件输入信息，改变class属性
  isSelected(product: Product): boolean {
    if (!product || !this.cureentProduct) {
      return false;
    }
    return product.sku === this.cureentProduct.sku;
  }
  ngOnInit() {
  }

}

// 定义Product类
export class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number) {
  }
}

