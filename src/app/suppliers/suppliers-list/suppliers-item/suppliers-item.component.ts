import { Component, OnInit, Input } from '@angular/core';
import { SuppliersService } from '../../suppliers.service';
import { Supplier } from '../../supplier.model';

@Component({
  selector: 'app-suppliers-item',
  templateUrl: './suppliers-item.component.html',
  styleUrls: ['./suppliers-item.component.scss']
})
export class SuppliersItemComponent implements OnInit {
  @Input() supplier: Supplier;

  constructor(private supService: SuppliersService) { }

  ngOnInit(): void {
  }

}
