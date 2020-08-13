import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers/offers.service';
import { Offer } from '../offers/offer.model';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.scss']
})
export class AccountOverviewComponent implements OnInit {

  offers: Offer[] = [];
  isUser: Boolean;
  elseBlock: any;
  elseBlockDelete: any;
  elseBlockHeader: any;


  constructor(public offersService: OffersService, public loginService: LoginService) { }

  ngOnInit(): void {
    this.isUser = this.loginService.getIsUser();
    this.getAllOffersByAccount();
  }

  public getAllOffersByAccount(){
    if(this.isUser){
      this.offersService.getOffersByUser().subscribe((data: any[]) => {
        this.createOffersFromData(data);
      })
    } else if(!this.isUser){
      this.offersService.getOffersBySupplier().subscribe((data: any[]) => {
        this.createOffersFromData(data);
      })
    }
  }

  public createOffersFromData(data){
    for (let item in data) {
      let offer = data[item];
      let newOffer = new Offer(offer.id, offer.title, null, offer.amountOffered,
        offer.amountRemaining);
        this.offers.push(newOffer);
    } 
  }

  public deleteOfferOnClick(offerId: Number) {
    this.offersService.deleteOffer(offerId).subscribe(data=>{
      this.offers = [];
      this.ngOnInit();
    });
  }

  public deleteOrderOnClick(offerId: Number) {
    this.offersService.deleteOrder(offerId).subscribe(data=>{
      this.offers = [];
      this.ngOnInit();
    });
  }

}