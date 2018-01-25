
import { Pipe, PipeTransform } from '@angular/core';

import { SearchProducts } from '../product';

import * as _ from 'lodash';

@Pipe({

    name: 'wildcardProductSearch'
})

export class SearchPipe implements PipeTransform {

    transform(wildcardProductProps: SearchProducts[], productProp: any): any {

        let keyArr: any[] = Object.keys(wildcardProductProps),
        value: any = Object,
        arrProps: any[] = [],
        val: any,
        propVal: any[] = [],

        propValToString: string = "",

        regExResult: any[] = [],

        regEx: RegExp =  new RegExp(productProp, "gi");

        keyArr.forEach((key: any) => {

            value = wildcardProductProps[key];
            //console.log('value: ' + value);

            propVal = _.map(value);
            //console.log('propVal: ' + propVal);

            for(val in propVal) {

                //console.log('propVal item: ' + propVal[val]);

                propValToString = _.toString(propVal[val]);
                regExResult = propValToString.match(regEx);

                console.log('regEx: ' + regEx);
                console.log('regEx result: ' + regExResult);

                if(_.toString(regExResult) === productProp || _.lowerCase(_.toString(regExResult)) === _.lowerCase(productProp)) {
                    
                    arrProps.push(value);
                    //console.log('Property array: ' + arrProps.length);
                }
            }
        });

        return arrProps;
    }
}
