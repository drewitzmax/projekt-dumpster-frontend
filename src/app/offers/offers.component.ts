import { Component, OnInit, Input, Inject, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { OffersService } from './offers.service';
import { Offer } from './offer.model';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { SuppliersItemComponent } from '../suppliers/suppliers-list/suppliers-item/suppliers-item.component';

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
  offersNonVegan: Offer[] = [];
  offersVegan: Offer[] = [];
  offersAvailable: boolean = false;

  constructor(private offersService: OffersService, public loginService: LoginService) {}

  ngOnInit(): void {
    this.loadOffersByProvider();
  }

  private loadOffersByProvider() {
    this.offersService.getOffers().subscribe((data: any[]) => {
      let amountOfferedTotal = 0;
      let amountRemainingTotal = 0;
      let amountOfferedTotalVegan = 0;
      let amountRemainingTotalVegan = 0;
      let firstAvailableOfferId: Number;
      let firstAvailableVeganOfferId: Number;
      for (let item in data) {
        if (data.hasOwnProperty(item)) {
          let offer = data[item];
          if (offer.provider.id == this.providerId) {
            if (offer.amountRemaining > 0) {
              if(offer.describtion == "non-vegan"){
                amountOfferedTotal += Number(offer.amountOffered);
                amountRemainingTotal += Number(offer.amountRemaining);
                if (!firstAvailableOfferId) firstAvailableOfferId = offer.id;
              }else if(offer.describtion == "vegan"){
                amountOfferedTotalVegan += Number(offer.amountOffered);
                amountRemainingTotalVegan += Number(offer.amountRemaining);
              if (!firstAvailableVeganOfferId) firstAvailableVeganOfferId = offer.id;
              }
            }
          }
        }
      }
      let newOfferNonVegan = new Offer(firstAvailableOfferId, null, "non-vegan", amountOfferedTotal,
      amountRemainingTotal);
      this.offersNonVegan.push(newOfferNonVegan);
      let newVeganOffer = new Offer(firstAvailableVeganOfferId, null, "vegan", amountOfferedTotalVegan,
      amountRemainingTotalVegan);
      this.offersVegan.push(newVeganOffer);
      let hasVegan: String = "non-vegan";
      if(amountRemainingTotalVegan > 0) hasVegan = "vegan";
      let newOffer = new Offer(firstAvailableOfferId, null, hasVegan, amountOfferedTotal + amountOfferedTotalVegan, amountRemainingTotal + amountRemainingTotalVegan);
      this.offers.push(newOffer);
      if(this.offers[0].amountRemaining > 0){
        this.offersAvailable = true;
      }
    });
  }

  public claimOfferOnClick(offerId: Number) {
    this.offersService.claimOffer(offerId).subscribe(data=>{
      this.offers = [];
      this.offersNonVegan = [];
      this.offersVegan = [];
      this.ngOnInit();
    });
  }


}
