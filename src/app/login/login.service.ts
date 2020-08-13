import { Injectable, DoCheck, OnChanges } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, retry, map, timeout } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable, of } from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:8080";

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public username: string;

  public authenticated = this.isLoggedin();
  public isUser = this.getIsUser();


  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUserRole'));
    this.currentUser = this.currentUserSubject.asObservable();

    //this.authenticate();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }


  login(username: string, password: string) {

    let headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ":" + password) })
    this.username = username;
    let request =  this.http.get(this.url + "/login", { headers, responseType: 'text' as 'json' })
    .pipe(map(user => {
      if(user=="[user]"||user=="[provider]") this.authenticated = true;
      if(user=="[user]") this.isUser = true;

      localStorage.setItem('currentUserRole', JSON.stringify(user));
      localStorage.setItem('currentUserName', username);
      localStorage.setItem('currentUserPassword', password);
      localStorage.setItem('loggedIn', "true");

      this.currentUserSubject.next(user);
      console.log(JSON.stringify(user)+" "+typeof JSON.stringify(user));
      return user;

    }),catchError(this.handleError('login')));
    this.authenticate();
    return request;

  }

  isLoggedin(): boolean {
    return localStorage.getItem('currentUserRole') != null;
  }

  getIsUser(): boolean {
    return localStorage.getItem('currentUserRole') == '"[user]"';
  }
  isProvider(): boolean {
    return localStorage.getItem('currentUserRole') == '"[provider]"';
  }

  authenticate() {
    console.log("authenticate "+this.currentUserValue)
    if(this.currentUserValue) {
      this.authenticated = true;
      this.isUser = this.getIsUser();
      return true;
    } else {
      this.authenticated = false;
      this.isUser = false;
      return false;
    }

  }

  logout() {
    localStorage.removeItem('currentUserRole');
    localStorage.removeItem('currentUserName');
    localStorage.removeItem('currentUserPassword');
    localStorage.removeItem('loggedIn');
    this.currentUserSubject.next(null);
    this.authenticated = false;
    this.router.navigateByUrl('/');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


}
