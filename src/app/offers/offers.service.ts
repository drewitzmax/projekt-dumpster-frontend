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
  factoryResolver: any;
  rootViewContainer: any;
  private userRole: string;
  private username: string;
  private password: string;

  
  
  constructor(private http: HttpClient, @Inject(ComponentFactoryResolver) factoryResolver) {
    this.userRole = localStorage.getItem('currentUserRole');
    this.username = localStorage.getItem('currentUserName');
    this.password = localStorage.getItem('currentUserPassword');
    this.factoryResolver = factoryResolver 
  }

 public getOffers() {
    return this.http.get(this.offerUrl)
      .pipe(
        catchError(this.handleError('getOffers'))
      );

  }

  placeOffer(offer: Offer): Observable<Offer> {
    
    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) })
    return this.http.post<Offer>(this.offerUrl, offer,{ headers, responseType: 'text' as 'json' })
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
