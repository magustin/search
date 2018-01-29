
/*
export interface SearchProducts {

    id: number,
    status: string,
    type: string,
    customer: string,
    quantity: number,
    sales_person: string,
    award_date: string,
    is_valid: boolean
}
*/

// PRODUCT MODEL
export class Product {

    constructor(

        public id: number,
        public status: string,
        public type: string,
        public customer: string,
        public quantity: number,
        public sales_person: string,
        public award_date: string,
        public is_valid: boolean
    ) {}    
}

export const PRODUCTS: Product[] = [
    { id: 1, status: 'pending', type: 'loan', customer: 'Target Stores', quantity: 3, sales_person: 'John Doe', award_date: '02/03/2016', is_valid: true},
    { id: 2, status: 'working', type: 'fmv', customer: 'Talon Logistics, Inc.', quantity: 3, sales_person: 'Mick Slick', award_date: '01/01/2017', is_valid: false},
    { id: 3, status: 'working', type: 'loan', customer: 'Walmart', quantity: 3, sales_person: 'Jane Doe', award_date: '12/25/2014', is_valid: true},
];
