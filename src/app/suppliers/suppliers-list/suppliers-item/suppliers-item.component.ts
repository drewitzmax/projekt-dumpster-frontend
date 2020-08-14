import { Component, OnInit, Input, Inject, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { SuppliersService } from '../../suppliers.service';
import { Supplier } from '../../supplier.model';
import { OffersService } from 'src/app/offers/offers.service';
import { OffersComponent } from 'src/app/offers/offers.component';


@Component({
  selector: 'app-suppliers-item',
  templateUrl: './suppliers-item.component.html',
  styleUrls: ['./suppliers-item.component.scss']
})
export class SuppliersItemComponent implements OnInit {
  suppliers: Supplier[];
  hideBody: boolean = true;
  @ViewChild(OffersComponent) child;  
  veganFlag: boolean;


  constructor(private supService: SuppliersService) {}

  ngOnInit(): void {

    this.loadSuppliers();

  }


  onSelected() {
    this.hideBody = !this.hideBody;
  }

  loadSuppliers() {
        this.suppliers = this.supService.getSuppliers()

  }


}
