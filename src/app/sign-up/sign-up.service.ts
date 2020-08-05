import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor() { }

  userform = new FormGroup({
    $id: new FormControl(null),
    firstName: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    lastName: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    email:  new FormControl('', Validators.compose([Validators.email, Validators.required])),
    username:  new FormControl('', Validators.required),
    password:  new FormControl('', Validators.required),
  });

  supplierform = new FormGroup({
    $id: new FormControl(null),
    companyName: new FormControl('', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])),
    address: new FormControl('', Validators.required),
    email:  new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password:  new FormControl('', Validators.required),
    phonenumber: new FormControl('', Validators.compose([Validators.pattern('[+0-9 ]*'), Validators.required])),
    homepage: new FormControl(''),
    picture: new FormControl(''),
  });
}
