import { Component, OnInit } from '@angular/core';
import { SuppliersService } from './suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  providers: [SuppliersService]
})
export class SuppliersComponent implements OnInit {

  constructor(private supService: SuppliersService) { }

  ngOnInit() {
  }

}
