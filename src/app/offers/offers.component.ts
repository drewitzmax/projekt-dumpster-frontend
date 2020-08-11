import { Component, OnInit, Input, Inject, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { OffersService } from './offers.service';
import { Offer } from './offer.model';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  @Input() providerId: string;
  elseBlock: any;
  offersData: any;
  offersProviderData: any;
  offers: Offer[] = [];
  factoryResolver: ComponentFactoryResolver;
  rootViewContainer: ViewContainerRef;

  constructor(private offersService: OffersService){}

  ngOnInit(): void {
      this.loadOffersByProvider();
  }

  private loadOffersByProvider(){
    this.offersService.getOffers().subscribe((data: any[]) => {
      let amountOfferedTotal = 0;
      let amountRemainingTotal = 0;
      for (let item in data) {
        if (data.hasOwnProperty(item)) {
          let offer = data[item];
          if(offer.provider.id == this.providerId){
            if(offer.amountRemaining > 0){
              amountOfferedTotal += Number(offer.amountOffered);
              amountRemainingTotal += Number(offer.amountRemaining);
            }
          }
        }
      }
      let newOffer = new Offer(null, null, null,amountOfferedTotal.toString() ,
        amountRemainingTotal.toString());
      this.offers.push(newOffer);
    });  
  }

}
