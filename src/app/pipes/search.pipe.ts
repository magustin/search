
import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../product';

import * as _ from 'lodash';

@Pipe({

    name: 'wildcardProductSearch'
})

export class SearchPipe implements PipeTransform {

    transform(allProducts: Product[], strUserInput: any): any {

        let arrKey: any[] = Object.keys(allProducts),

        objProduct: any = Object,
        
        arrProps: any[] = [],
        
        prop: any,
        
        arrProductProps: any[] = [],

        strProductProps: string = "",

        regExResult: any[] = [],

        regExResult2: number,

        regEx: RegExp =  new RegExp(strUserInput, "gi"),

        regEx2: RegExp =  new RegExp(/^\s*$/, "g");

        arrKey.forEach((key: any) => {

            objProduct = allProducts[key];
            //console.log('objProduct: ' + objProduct);

            arrProductProps = _.map(objProduct);
            //console.log('arrProductProps: ' + arrProductProps);

            for(prop in arrProductProps) {

                strProductProps = _.toString(arrProductProps[prop]);
                regExResult = strProductProps.match(regEx);

                //console.log('arrProductProps item: ' + arrProductProps[prop]);
                //console.log('regEx: ' + regEx);
                //console.log('regEx result: ' + regExResult);
                //console.log('product prop: ' + strUserInput);

                if(_.toString(regExResult) === strUserInput || _.lowerCase(_.toString(regExResult)) === _.lowerCase(strUserInput)) {
                    
                    arrProps.push(objProduct);
                    //console.log('Property array: ' + arrProps.length);
                }
            }
        });

        regExResult2 = strUserInput.search(regEx2);
        //console.log("regExResult2: " + regExResult2);

        if(regExResult2 == 0) {

            return [-1];
        }

        //console.log('array length: ' + arrProps.length);
        //return arrProps;

        if(arrProps.length > 0) {

            //console.log("array returned");
            return arrProps;
        }
        
        if(arrProps.length == 0) {
            
            //console.log("nothing returned");
            //console.log("array length: " + arrProps.length);

            //return arrProps;
            return [-1];
        }
    }
}
