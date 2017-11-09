import { Component } from '@angular/core';
import {Http} from '@angular/http';
import {ProductService} from './services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  prods = [];
  cat = '';
  constructor(private productService: ProductService) {
    this.productService.getPoducts()
      .subscribe(
        data =>  {
          this.prods = data.json()['result'];
        },
        error => console.error(error)
      );
  }
}
