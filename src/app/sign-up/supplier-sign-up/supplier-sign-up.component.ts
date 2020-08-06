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
  form = this.signUpService.userform;
  formControls = this.signUpService.supplierform.controls;
  showSuccessMessage: boolean;

  ngOnInit(): void {
  }
  onSubmit() {
  //   this.submitted = true;
  //   if (this.form.valid) {

  //       this.signUpService.addUser(new Supplier(null,
  //                                           this.form.get("firstName").value.toString(), 
  //                                           this.form.get("lastName").value.toString(),
  //                                           this.form.get("username").value.toString(),
  //                                           this.form.get("password").value.toString(),
  //                                           this.form.get("email").value.toString()),
  //                       ).subscribe(user => console.log(user));
      
  //   }
  }

}
