import { Injectable, Inject, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Offer } from './offer.model';
import { catchError } from 'rxjs/internal/operators/catchError';
import { User } from '../users/user.model';
import { Observable, of, throwError } from 'rxjs';
import { OffersComponent } from './offers.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offerUrl = "http://localhost:8080/offer";
  deleteOrderByIdUrl = "http://localhost:8080/offer/cancel/";
  offersBySupplierUrl = "http://localhost:8080/offer/offerlist"
  ordersByUserUrl = "http://localhost:8080/offer/orderlist"
  claimUrl = "http://localhost:8080/offer/claim/";
  private userRole: string;
  private username: string;
  private password: string;



  constructor(private http: HttpClient) {
    this.userRole = localStorage.getItem('currentUserRole');
    this.username = localStorage.getItem('currentUserName');
    this.password = localStorage.getItem('currentUserPassword');
  }

  offerform = new FormGroup({
    $id: new FormControl(null),
    title: new FormControl('', Validators.required),
    amountOffered: new FormControl('', Validators.required)
  });

 public getOffers() {
    return this.http.get(this.offerUrl)
      .pipe(
        catchError(this.handleError)
      );

  }

  public getOffersBySupplier() {
    this.updateCredentials();
    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) })
    return this.http.get(this.offersBySupplierUrl, { headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  public getOffersByUser() {
    this.updateCredentials();
    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) })
    return this.http.get(this.ordersByUserUrl, { headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  public claimOffer(offerId: Number) {
    const claimUrlComp = this.claimUrl + offerId.toString();
    this.updateCredentials();
    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) })
    return this.http.post(claimUrlComp, null, { headers, responseType: 'text' as 'json' })
      .pipe(
        catchError(this.handleError)
      );
  }

  public placeOffer(offer: Offer): Observable<Offer> {
    this.updateCredentials();
    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) })
    return this.http.post<Offer>(this.offerUrl, offer, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  public deleteOffer(offerId: Number): Observable<{}> {
    this.updateCredentials();
    const offerUrlComp = this.offerUrl + "/" + offerId.toString();
    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) })
    return this.http.delete(offerUrlComp, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  public deleteOrder(offerId: Number): Observable<{}> {
    this.updateCredentials();
    const offerUrlComp = this.deleteOrderByIdUrl + offerId.toString();
    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) })
    return this.http.patch(offerUrlComp, {}, {headers})
      .pipe(
        catchError(this.handleError))
      );
  }

  private updateCredentials(){
    this.userRole = localStorage.getItem('currentUserRole');
    this.username = localStorage.getItem('currentUserName');
    this.password = localStorage.getItem('currentUserPassword');
  }

  public handleError(error) {
    let errorMessage = '';
    let successMessage = '';
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error("Error Event");
      } else {
        console.log(`error status : ${error.status} ${error.statusText}`);
        if (error.status == 201) successMessage = "SUCCESS";
        if (error.status > 400){
          errorMessage = error.error;
          window.alert(errorMessage);
        } 

      }
    } else {
      console.error("something went wrong");
    }

    return throwError(error);

  } 

}
