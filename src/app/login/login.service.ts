import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authorized: boolean;
  url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  login(username: string, password: string){

    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)})

    return this.http.get(this.url + "/login",{headers, responseType: 'text' as 'json'})
  }
}
