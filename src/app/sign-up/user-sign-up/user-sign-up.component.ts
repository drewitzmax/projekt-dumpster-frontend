import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service'
import { User } from 'src/app/users/user.model';


@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {

  constructor(public signUpService: SignUpService) { }
  submitted: boolean;
  form = this.signUpService.userform;
  formControls = this.signUpService.userform.controls;
  showSuccessMessage: boolean;
  fieldTextType: boolean;


  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {

        this.signUpService.addUser(new User(null,
                                            this.form.get("firstName").value.toString(), 
                                            this.form.get("lastName").value.toString(),
                                            this.form.get("username").value.toString(),
                                            this.form.get("password").value.toString(),
                                            this.form.get("email").value.toString()),)
                          .subscribe(user => console.log(user));
      
    }
  }

}
