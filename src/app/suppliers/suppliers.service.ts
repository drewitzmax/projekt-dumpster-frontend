import { Injectable } from '@angular/core';
import { Supplier } from './supplier.model'

export class SuppliersService{
    private suppliers: Supplier[] = [
        new Supplier("Pizza Mari", "Pizzeria","https://www.fressfreunde.at/wp-content/uploads/2019/09/Mari_Header.jpg"),
        new Supplier("Alberto Schnitzel", "Österreichisch","https://www.gutekueche.at/img/rezept/170/460x307_wiener-schnitzel.jpg")
    ];

    getSuppliers() {
        return this.suppliers;
    }
}