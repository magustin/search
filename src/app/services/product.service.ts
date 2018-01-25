
import { Injectable } from '@angular/core';

import { PRODUCTS } from '../product';

@Injectable()
export class ProductService {

  constructor() {}

      getProducts() {

          return PRODUCTS;
      }
}
