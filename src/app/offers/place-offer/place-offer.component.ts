import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Offer } from '../offer.model';
import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-place-offer',
  templateUrl: './place-offer.component.html',
  styleUrls: ['./place-offer.component.scss']
})
export class PlaceOfferComponent implements OnInit {

  constructor(private offerService: OffersService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.offerService.placeOffer(new Offer(null,"testoffer","testdescription",'4','5'))
                                  .subscribe(offer => console.log(offer));
  }

}
