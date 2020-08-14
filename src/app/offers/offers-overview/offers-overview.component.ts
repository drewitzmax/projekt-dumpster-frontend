import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer.model';
import { OffersService } from '../offers.service';
import { LoginService } from 'src/app/login/login.service';
import { Supplier } from 'src/app/suppliers/supplier.model';

@Component({
  selector: 'app-offers-overview',
  templateUrl: './offers-overview.component.html',
  styleUrls: ['./offers-overview.component.scss']
})
export class OffersOverviewComponent implements OnInit {

  offers: Offer[] = [];
  suppliers: Supplier[] = [];
  isUser: Boolean;
  elseBlock: any;
  elseBlockDelete: any;
  isLoading: boolean;

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
      let newOffer = new Offer(offer.id, offer.title, offer.describtion, offer.amountOffered,
        offer.amountRemaining);
        this.offers.push(newOffer);
        console.log(offer)
        let newSupplier = new Supplier(null, offer.provider.name, null, null, null, null, null, null);
          this.suppliers.push(newSupplier);
      
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