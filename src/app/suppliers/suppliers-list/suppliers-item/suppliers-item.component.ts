import { Component, OnInit, Input } from '@angular/core';
import { SuppliersService } from '../../suppliers.service';
import { Supplier } from '../../supplier.model';
import { HttpClient } from '@angular/common/http';

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

  constructor(private supService: SuppliersService,private http: HttpClient) {
/*     this.http.get(this.url + "/provider").toPromise().then(
      data => {console.log(data);
      
      for( let item in data) {
        if(data.hasOwnProperty(item)){
          this.items.push(data[item])
        }
      }
    }) */
   }

  ngOnInit() {
    this.suppliers = this.supService.getSuppliers();    //Mit ng-bootstrap
  }

  onSelected() {
    this.hideBody = !this.hideBody;
  }
}
