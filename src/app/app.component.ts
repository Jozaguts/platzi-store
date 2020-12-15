import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  items = ['Matias', 'Isa', 'Sol'];
  power = 10;

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 8000,
      description: 'bla bla bla bla bla'
    }
  ];
  addItem():void {
    this.items.push('Nuevo Item');
  }
  deleteItem(index: number):void {
    this.items.splice(index, 1);
  }
  clickProduct(id: number):void {
    console.log('product');
    console.log(id);
  }
}
