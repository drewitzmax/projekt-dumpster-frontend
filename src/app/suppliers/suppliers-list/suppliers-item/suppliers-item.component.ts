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
  suppliers: Supplier[] = [];
  hideBody: boolean = true;
  hasVegan: boolean[] = [];

  constructor(private supService: SuppliersService, private offersService: OffersService) { }

  ngOnInit(): void {
    this.loadSuppliers();
    console.log(this.suppliers)
    console.log(this.hasVegan)
  }


  onSelected() {
    this.hideBody = !this.hideBody;
  }

  loadSuppliers() {
    this.supService.getSuppliers().subscribe((data: any[]) => {
      this.offersService.getOffers().subscribe((data2: any[]) => {
        for (let index = 0; index < data.length; index++) {
            let prov = data[index];
            let newSupplier = new Supplier(prov.id, prov.name, prov.address, prov.phoneNumber,
              prov.email, prov.password, prov.homepageUrl, prov.photos);
            this.suppliers.push(newSupplier);
            for (let index2 = 0; index2 < data2.length; index2++) {
              let offer = data2[index2];
              if(offer.provider.id == prov.id){
                if(offer.describtion == "vegan"){
                  this.hasVegan[index] = true;
                  break;
                } 
                else if(offer.describtion == "non-vegan"){
                  this.hasVegan[index] = false;
                } 
              }else {
                this.hasVegan[index] = false;
              }
            }
          
        }
      })
    })
  }

}


