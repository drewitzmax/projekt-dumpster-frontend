import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';
import { Supplier } from 'src/app/suppliers/supplier.model';


@Component({
  selector: 'app-supplier-sign-up',
  templateUrl: './supplier-sign-up.component.html',
  styleUrls: ['./supplier-sign-up.component.scss']
})
export class SupplierSignUpComponent implements OnInit {

  constructor(public signUpService: SignUpService) { }
  submitted: boolean;
  form = this.signUpService.supplierform;
  formControls = this.signUpService.supplierform.controls;
  showSuccessMessage: boolean;

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
        this.signUpService.addSupplier(new Supplier(null,
                                                    this.form.get("companyName").value.toString(), 
                                                    this.form.get("address").value.toString(),
                                                    this.form.get("phonenumber").value.toString(),
                                                    this.form.get("email").value.toString(),
                                                    this.form.get("password").value.toString(),
                                                    this.form.get("homepage").value.toString(),
                                                    new Array(this.form.get("picture").value.toString())))
                         .subscribe(supplier => console.log(supplier));
        this.signUpService.signedUp = true;
        
    }
  }

}
