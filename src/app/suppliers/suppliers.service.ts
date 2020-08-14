import { Injectable } from '@angular/core';
import { Supplier } from './supplier.model'
import { HttpClient } from '@angular/common/http';

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

    private suppliers: Supplier[] = [

    ];

    constructor(private http: HttpClient) {
        this.http.get(this.url + "/provider").toPromise().then(
          data => {
          
          for( let item in data) {
            if(data.hasOwnProperty(item)){
                let prov = data[item];
                let newSupplier = new Supplier(prov.id, prov.name, prov.address, prov.phoneNumber,
                    prov.email, prov.password, prov.homepageUrl, prov.photos);
                
                this.suppliers.push(newSupplier);              
            }
          }
        })
       }
    

    getSuppliers() {
        return this.suppliers;
    }
}