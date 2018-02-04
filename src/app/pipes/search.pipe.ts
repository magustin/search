
import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../product';

import * as _ from 'lodash';

@Pipe({

    name: 'productSearch'
})

export class SearchPipe implements PipeTransform {

    transform(allProducts: Product[], strUserInput: any): any {

        let arrKey: any[] = Object.keys(allProducts),
        objProduct: any = Object,
        arrProps: any[] = [],
        arrProductProps: any[] = [],
        regExResult: any[] = [],
        strProductProps: string = "",
        strTrimPreWhitespace: string = "",
        prop: any,
        regEx: RegExp;

        // CATCH SPACES INITIALLY ENTERED AND REPLACE WITH ''
        
        //strTrimPreWhitespace = strUserInput.replace(/(^\s*$)/g, '');
         strTrimPreWhitespace = strUserInput.replace(/(^\s*$|[^\w\d\s.\/,\s\w])/gi, '');

        // CONSTRUCTOR THAT GENERATES THE REGEX CODE
        regEx = new RegExp(strTrimPreWhitespace, "gi");

        console.log("regEx: " + regEx);

        // LOOP THROUGH PRODUCTS
        arrKey.forEach((key: any) => {

            objProduct = allProducts[key];
            arrProductProps = _.map(objProduct);

            // LOOP THROUGH PRODUCT PROPERTIES AND LOOK FOR STRING MATCHES WITH USER INPUT
            //for(prop in arrProductProps) {
            for(prop = 1; prop <= arrProductProps.length; prop++){

                strProductProps = _.toString(arrProductProps[prop]);
                regExResult = strProductProps.match(regEx);

                if(_.toString(regExResult) === strUserInput || _.lowerCase(_.toString(regExResult)) === _.lowerCase(strUserInput)) {
                    
                    arrProps.push(objProduct);
                }
            }
        });

        // RETURN EMPTY ARRAY IF SPACES WERE INITIALLY ENTERED
        if(strTrimPreWhitespace === '') {

            return [-1];
        }

        // RETURN PRODUCTS
        if(arrProps.length > 0) {

            return arrProps;
        }
        
        // NO MATCH
        if(arrProps.length == 0) {
            
            return [-1];
        }
    }
}
