import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';
  items = ['Matias', 'Isa', 'Sol'];
  power = 10;
  constructor() { }

  ngOnInit(): void {
  }
  addItem(): void {
    this.items.push('Nuevo Item');
  }
  deleteItem(index: number):void {
    this.items.splice(index, 1);
  }

}
