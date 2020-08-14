export class Offer {
    constructor(public offer_id: any,
                public title: String,
                public describtion: String,
                public amountOffered: Number,
                public amountRemaining: Number){}


    
    getID(){ return this.offer_id }
    getTitle(){ return this.title }
    getDescription(){ return this.describtion }
    getAmountOffered(){ return this.amountOffered }
    getAmountRemaining(){ return this.amountRemaining }

}

