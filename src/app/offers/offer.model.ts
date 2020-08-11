export class Offer {
    constructor(private offer_id: any,
                private title: String,
                private description: String,
                private amount_offered: String,
                private amount_remaining: String){}

    
    getID(){ return this.offer_id }
    getTitle(){ return this.title }
    getDescription(){ return this.description }
    getAmountOffered(){ return this.amount_offered }
    getAmountRemaining(){ return this.amount_remaining }

}

