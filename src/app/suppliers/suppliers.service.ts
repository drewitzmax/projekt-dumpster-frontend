import { Injectable } from '@angular/core';
import { Supplier } from './supplier.model'

export class SuppliersService{
    private suppliers: Supplier[] = [
        new Supplier("Pizza Mari", "Pizzeria"),
        new Supplier("Alberto Schnitzel", "Österreichisch")
    ];

    getSuppliers() {
        return this.suppliers;
    }
}