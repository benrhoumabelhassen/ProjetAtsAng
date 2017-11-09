import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

@Injectable()
export class ProductService {
  constructor(private http: Http) { }
  getPoducts() {
    return this.http.get('http://localhost:8000/api/v1/products');
  }

}
