
// PRODUCT MODEL
export class Product {

    constructor(

        public id: number,
        public name: string,
        public type: string,
        public status: string,
        public price: number,
        public description: string,
        public is_valid: boolean
    ) {}    
}

export const PRODUCTS: Product[] = [
    { id: 1, name: 'Medavac Survival Kit', type: 'Camping Gear', status: 'In stock', price: 14.99, description: 'First Aid Kit', is_valid: true },
    { id: 2, name: 'WazSUP Stand Up Paddle Board', type: 'Outdoor Sports Equipment', status: 'In stock', price: 975.00, description: 'Wave Rider', is_valid: true },
    { id: 3, name: 'Pole Benda Fishing Rod', type: 'Fishing Gear', status: 'Out of stock', price: 129.99, description: 'Made of graphite composite', is_valid: false },
    { id: 4, name: 'The Great Outdoors Dome Tent', type: 'Camping Equipment', status: 'In stock', price: 300.00, description: 'Camping shelter', is_valid: true },
    { id: 5, name: 'KalusTum Conventional Reel', type: 'Fishing Gear', status: 'In stock', price: 47.98, description: 'For Big game fish', is_valid: true },
    { id: 6, name: 'ClearBlue Dive Mask', type: 'Diving Gear', status: 'On Order', price: 96.00, description: 'Fog resistant', is_valid: true }
];