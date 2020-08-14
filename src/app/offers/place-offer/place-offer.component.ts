import { Component, OnInit, DoCheck } from '@angular/core';
import { OffersService } from '../offers.service';
import { Offer } from '../offer.model';
import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-place-offer',
  templateUrl: './place-offer.component.html',
  styleUrls: ['./place-offer.component.scss']
})
export class PlaceOfferComponent implements OnInit, DoCheck {
  submitted: boolean;
  form = this.offerService.offerform;
  formControls = this.offerService.offerform.controls;
  showSuccessMessage: boolean;
  fieldTextType: boolean;
  isVegan = false;
  
  showRedirect = false;

  describtion: string;
  veganBtnValue: string;

  constructor(public offerService: OffersService) {
   }

  ngOnInit(): void {
  }

  ngDoCheck() {
    if(this.isVegan) {
      this.describtion = "vegan";
      this.veganBtnValue = "vegan \u{02713}";
    } else {
      this.describtion = "non-vegan";
      this.veganBtnValue = "vegan?";
    }

  }

  toggleVegan() {
    this.isVegan = !this.isVegan;
  }
  onSubmit() {
    this.submitted = true;
    if(this.form.valid){
      let newOffer = new Offer(null,
                                this.form.get("title").value, 
                                this.describtion.toString(), 
                                this.form.get("amountOffered").value,
                                this.form.get("amountOffered").value);
      console.log(newOffer.describtion+" "+typeof newOffer.describtion)
      this.offerService.placeOffer(newOffer).subscribe(offer => console.log(offer));
      this.offerService.offerform.reset();
      this.submitted = false;
      this.isVegan = false;
      this.showRedirect = true;
    }
  }

}
