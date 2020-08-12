export class Offer {
    constructor(public offer_id: any,
                public title: String,
                public description: String,
                public amountOffered: Number,
                public amountRemaining: Number){}

    
    getID(){ return this.offer_id }
    getTitle(){ return this.title }
    getDescription(){ return this.description }
    getAmountOffered(){ return this.amountOffered }
    getAmountRemaining(){ return this.amountRemaining }

}

