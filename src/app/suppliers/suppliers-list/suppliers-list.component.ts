import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../suppliers.service';
import { Supplier } from '../supplier.model';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.scss']
})
export class SuppliersListComponent implements OnInit { 
//Ohne ng-bootsrap
//suppliers: Supplier[];
  constructor(private supService: SuppliersService) { }

  ngOnInit() {
    //Ohne ng-bootsrap
    //this.suppliers = this.supService.getSuppliers(); 
  }

}
