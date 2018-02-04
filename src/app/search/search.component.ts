
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
    title: string = "";
    filteredProductType: string = "";
    filteredProductStatus: string = "";
    filteredProductCustomer: string = "";
    productSearchInput: string = "";
    activeProduct: string = "";

    constructor(ProductService: ProductService) {

        this.products = ProductService.getProducts();    
    }
    
    update(value:string) {

        this.productSearchInput = value;
        this.title = value;
    }

    onSelect(product: Product) {

        this.showProductDetails = true;
        this.theSelectedProduct = product;
        this.search = false;
        this.activeProduct = this.theSelectedProduct.is_valid ? "Yes" : "No";
    }

    searchProductType() {

        this.showProductDetails = false;
        this.search = true;
        this.productSearchInput = "";
    }
}
