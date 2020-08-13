import { Injectable, Inject, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Offer } from './offer.model';
import { catchError } from 'rxjs/internal/operators/catchError';
import { User } from '../users/user.model';
import { Observable, of } from 'rxjs';
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
        catchError(this.handleError('getOffers'))
      );

  }

  public getOffersBySupplier() {
    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) })
    return this.http.get(this.offersBySupplierUrl, { headers})
      .pipe(
        catchError(this.handleError('getOffersBySupplier'))
      );
  }

  public getOffersByUser() {
    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) })
    return this.http.get(this.ordersByUserUrl, { headers})
      .pipe(
        catchError(this.handleError('getOffersByUser'))
      );
  }

  public claimOffer(offerId: Number) {
    const claimUrlComp = this.claimUrl + offerId.toString();
    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) })
    return this.http.post(claimUrlComp, null, { headers, responseType: 'text' as 'json' })
      .pipe(
        catchError(this.handleError('claimOffer'))
      );
  }

  public placeOffer(offer: Offer): Observable<Offer> {
    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) })
    return this.http.post<Offer>(this.offerUrl, offer, { headers })
      .pipe(
        catchError(this.handleError('addOffer', offer))
      );
  }

  public deleteOffer(offerId: Number): Observable<{}> {
    const offerUrlComp = this.offerUrl + "/" + offerId.toString();
    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) })
    return this.http.delete(offerUrlComp, {headers})
      .pipe(
        catchError(this.handleError('deleteOffer'))
      );
  }

  public deleteOrder(offerId: Number): Observable<{}> {
    const offerUrlComp = this.deleteOrderByIdUrl + offerId.toString();
    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) })
    return this.http.patch(offerUrlComp, {headers})
      .pipe(
        catchError(this.handleError('deleteOrder'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
