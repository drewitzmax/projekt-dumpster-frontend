import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../users/user.model'
import { Supplier } from '../suppliers/supplier.model'
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  userUrl = "http://localhost:8080/user";
  supplierUrl = "http://localhost:8080/provider";


  constructor(private http: HttpClient) {
  }

  userform = new FormGroup({
    $id: new FormControl(null),
    firstName: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    lastName: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  supplierform = new FormGroup({
    $id: new FormControl(null),
    companyName: new FormControl('', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password: new FormControl('', Validators.required),
    phonenumber: new FormControl('', Validators.compose([Validators.pattern('[+0-9 ]*'), Validators.required])),
    homepage: new FormControl(''),
    picture: new FormControl(''),
  });


  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user)
      .pipe(
        catchError(this.handleError('addUser', user))
      );

  }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.supplierUrl, supplier)
      .pipe(
        catchError(this.handleError('addSupplier', supplier))
      );

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
