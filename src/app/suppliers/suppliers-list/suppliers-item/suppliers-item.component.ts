import { Component, OnInit, Input } from '@angular/core';
import { SuppliersService } from '../../suppliers.service';
import { Supplier } from '../../supplier.model';

@Component({
  selector: 'app-suppliers-item',
  templateUrl: './suppliers-item.component.html',
  styleUrls: ['./suppliers-item.component.scss']
})
export class SuppliersItemComponent implements OnInit {
  //Ohne ng-bootstrap
  //@Input() supplier: Supplier;
  suppliers: Supplier[];
  hideBody: boolean = true;

  constructor(private supService: SuppliersService) { }

  ngOnInit() {

    this.suppliers = this.supService.getSuppliers();    //Mit ng-bootstrap
  }

  onSelected() {
    this.hideBody = !this.hideBody;
  }
}
