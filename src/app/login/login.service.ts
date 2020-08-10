import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:8080";
  
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  username: string;
  
  authenticated = false;
  userAuthenticated = false;
  providerAuthenticated = false;
  


  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUserRole'));
    this.currentUser = this.currentUserSubject.asObservable();

    if(this.currentUserValue) this.authenticate();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {

    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ":" + password) })
    this.username = username;

    let request = this.http.get(this.url + "/login", { headers, responseType: 'text' as 'json' })
    .pipe(map(user => {
      
      localStorage.setItem('currentUserRole', JSON.stringify(user));
      localStorage.setItem('currentUserName', username);
      
      this.currentUserSubject.next(user);
      return user;
    
    }),catchError(this.handleError));

    this.authenticate();
    return request;

  }

  authenticate() {
    if(this.currentUserValue==='user') {
      this.userAuthenticated = true;
    } else if(this.currentUserValue==='provider') {
        this.providerAuthenticated = true;
    }
      this.authenticated = true;
      let auth = this.authenticated;
      return auth;
  }

  logout() {
    localStorage.removeItem('currentUserRole');
    localStorage.removeItem('currentUserName');
    this.currentUserSubject.next(null);
    this.authenticated = false;
    this.userAuthenticated = false;
    this.providerAuthenticated = false;
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
