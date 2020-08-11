import { Injectable, DoCheck, OnChanges } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, retry, map, timeout } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:8080";
  
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public username: string;
  
  public authenticated: boolean;
 

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUserRole'));
    this.currentUser = this.currentUserSubject.asObservable();

    this.authenticate();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }


  login(username: string, password: string) {

    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ":" + password) })
    this.username = username;
    let request =  this.http.get(this.url + "/login", { headers, responseType: 'text' as 'json' })
    .pipe(map(user => {
      
      localStorage.setItem('currentUserRole', JSON.stringify(user));
      localStorage.setItem('currentUserName', username);
      
      this.currentUserSubject.next(user);
      console.log(JSON.stringify(user)+" "+typeof JSON.stringify(user));
      return user;
    
    }),catchError(this.handleError));
    this.authenticate();
    return request;

  }

  authenticate() {
    console.log("authenticate "+this.currentUserValue)
    if(this.currentUserValue) {
      this.authenticated = true;
      return true;
    } else {
      this.authenticated = false;
      return false;
    }

  }

  logout() {
    localStorage.removeItem('currentUserRole');
    localStorage.removeItem('currentUserName');
    this.currentUserSubject.next(null);
    this.authenticated = false;
  }

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {

      errorMessage = `Error: ${error.error.message}`;
    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
