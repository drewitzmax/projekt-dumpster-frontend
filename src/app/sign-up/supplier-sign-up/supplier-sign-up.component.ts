import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';


@Component({
  selector: 'app-supplier-sign-up',
  templateUrl: './supplier-sign-up.component.html',
  styleUrls: ['./supplier-sign-up.component.scss']
})
export class SupplierSignUpComponent implements OnInit {

  constructor(public signUpService: SignUpService) { }
  submitted: boolean;
  formControls = this.signUpService.supplierform.controls;
  showSuccessMessage: boolean;

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    // if (this.travelService.form.valid) {
    //   if (this.travelService.form.get('$key').value == null) {
    //     this.travelService.insertTravel(this.travelService.form.value);
    //   } else {
    //     this.travelService.updateTravel(this.travelService.form.value);
    //     this.showSuccessMessage = true;
    //     setTimeout(() => this.showSuccessMessage = false, 3000);
    //     this.submitted = false;
    //     this.travelService.form.reset();
    //   }
    // }
  }

}
