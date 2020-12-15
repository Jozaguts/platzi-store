import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  clickProduct(id: number): void {
    console.log('product');
    console.log(id);
  }

}
