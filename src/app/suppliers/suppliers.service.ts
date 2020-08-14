import { Injectable } from '@angular/core';
import { Supplier } from './supplier.model'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class SuppliersService{
    url = "http://localhost:8080"
    items = [];

/*     private suppliers: Supplier[] = [
        new Supplier(1,"Pizza Mari","Leopoldsgasse 23A, 1020 Wien","012345678","pizza@mari.at","1234","https://www.pizzamari.at/",
        "https://www.fressfreunde.at/wp-content/uploads/2019/09/Mari_Header.jpg"),
        
        new Supplier(2,"Alberto Schnitzel","Albertogaße 1, 1110, Wien","07654321","alberto@schnitzl.at","4321","https://www.pizzamari.at/",
        "https://www.gutekueche.at/img/rezept/170/460x307_wiener-schnitzel.jpg")
    ]; */

    constructor(private http: HttpClient) {
        this.getSuppliers();
    }
    

    getSuppliers() {
        return this.http.get(this.url + "/provider").pipe(catchError(this.handleError))
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
        if (error.status >= 400){
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