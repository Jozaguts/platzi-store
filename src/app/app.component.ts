import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  items = ['Matias', 'Isa', 'Sol'] 
  
  addItem() {
    this.items.push('Nuevo Item');
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
