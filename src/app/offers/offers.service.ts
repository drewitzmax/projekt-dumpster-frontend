import { Injectable, Inject, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Offer } from './offer.model';
import { catchError } from 'rxjs/internal/operators/catchError';
import { User } from '../users/user.model';
import { Observable, of } from 'rxjs';
import { OffersComponent } from './offers.component';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offerUrl = "http://localhost:8080/offer";
  claimUrl = "http://localhost:8080/offer/claim/";
  factoryResolver: any;
  rootViewContainer: any;


  constructor(private http: HttpClient, @Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver }

 public getOffers() {
    return this.http.get(this.offerUrl)
      .pipe(
        catchError(this.handleError('getOffers'))
      );

  }

  public claimOffer(offerId: Number, headers: HttpHeaders) {
    const claimUrlComp = this.claimUrl + offerId.toString();
    console.log("ININININ")
    console.log(offerId)
    console.log(claimUrlComp)
    return this.http.post(claimUrlComp, {headers})
      .pipe(
        catchError(this.handleError('claimOffer'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  // addUser(user: User): Observable<User> {
  //   return this.http.post<User>(this.userUrl, user)
  //     .pipe(
  //       catchError(this.handleError('addUser', user))
  //     );

  // }

}
