
import { Component } from '@angular/core';

import { ProductService } from '../services/product.service';

import { Product } from '../product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ProductService]
})

export class SearchComponent {

    products: any[] = [];

    theSelectedProduct: Product;

    showProductDetails: boolean = false;

    search: boolean = true;

    showEditDetails: boolean = false;

    title: string = "";

    filteredProductType: string = "";
    filteredProductStatus: string = "";
    filteredProductCustomer: string = "";
    filteredProductWildcard: string = "";

    activeProduct: string = "";

    constructor(ProductService: ProductService) {

        this.products = ProductService.getProducts();    
    }
    
    update(value:string) {

        // CONVERT TO LOWERCASE
        //this.filteredProductType = _.lowerCase(value);
        //this.filteredProductWildcard = _.lowerCase(value);

        this.filteredProductWildcard = value;

        // DRESSUP TITLE BY CAPITALIZING FIRST WORD    
        //this.title = _.capitalize(value);
        this.title = value;
    }

    onSelect(product: Product) {

        this.showProductDetails = true;
        this.theSelectedProduct = product;
        //this.filteredProductType = "";
        //this.filteredProductWildcard = "";
        this.search = false;
        this.activeProduct = this.theSelectedProduct.is_valid ? "Yes" : "No";
    }

    searchProductType() {

        this.showProductDetails = false;
        this.showEditDetails = false;
        this.search = true;
        this.filteredProductWildcard = "";
    }

    editDetails() {

        this.showEditDetails = true;
    }
}
