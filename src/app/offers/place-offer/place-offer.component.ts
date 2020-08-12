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
  submitted: boolean;
  form = this.offerService.offerform;
  formControls = this.offerService.offerform.controls;
  showSuccessMessage: boolean;
  fieldTextType: boolean;

  constructor(public offerService: OffersService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    let newOffer = new Offer(null,
      this.form.get("title").value, 
      null,
      this.form.get("amountOffered").value,
      this.form.get("amountOffered").value);

    console.log(typeof this.form.get("amountOffered").value+" amountOffered")
    console.log(typeof newOffer.amountOffered+" "+newOffer.amountOffered+" newoffer");
    this.offerService.placeOffer(newOffer)
      .subscribe(offer => console.log(offer));
  }

}
