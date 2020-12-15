import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy

} from '@angular/core';
import { Product } from '../product.model';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnInit, DoCheck, OnDestroy {

    @Input() product!: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    today = new Date();
    constructor() {
        console.log(' constructor');
    }
    // ngOnChanges(changes: SimpleChanges): void {
    //     console.log('OnChanges ')
    //     console.log(changes)
    // }
  // tslint:disable-next-line:typedef
    ngOnInit() {
        console.log(' 3 ngOnInit');
    }

  // tslint:disable-next-line:typedef
    ngDoCheck() {
        console.log('ngDoCheck');
    }
  // tslint:disable-next-line:typedef
    ngOnDestroy() {
        console.log('ngOnDestroy');
    }
  // tslint:disable-next-line:typedef
    addCart() {
        console.log('add carrito');
        this.productClicked.emit(this.product.id);
    }
}
