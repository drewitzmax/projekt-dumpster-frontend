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
    title: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    description: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    amountOffered: new FormControl('', Validators.required)
  });

 public getOffers() {
    return this.http.get(this.offerUrl)
      .pipe(
        catchError(this.handleError('getOffers'))
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

  placeOffer(offer: Offer): Observable<Offer> {
    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) })
    return this.http.post<Offer>(this.offerUrl, offer, { headers })
      .pipe(
        catchError(this.handleError('addOffer', offer))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
