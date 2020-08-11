import { Component, OnInit, Input, Inject, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { SuppliersService } from '../../suppliers.service';
import { Supplier } from '../../supplier.model';
import { OffersService } from 'src/app/offers/offers.service';


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
  service: any;

  constructor(private supService: SuppliersService) {}

  ngOnInit(): void {

    this.loadSuppliers();
    setTimeout(() => {
      this.createSuppliersListHTML();
      
    }, 1000)
    //Mit ng-bootstrap

  }


  onSelected() {
    this.hideBody = !this.hideBody;
  }

  createSuppliersListHTML() {
    // for (let index = 0; index < this.suppliers.length; index++) {
    //   let card = document.createElement("div");
    //   card.classList.add("card");
    //   let cardHeader = document.createElement("div");
    //   cardHeader.classList.add("card-header");
    //   cardHeader.id = "heading" + index;
    //   let h2= document.createElement("h2");
    //   h2.classList.add("mb-0")
    //   let button = document.createElement("button");
    //   button.classList.add("btn", "btn-link", "collapsed");
    //   button.setAttribute("aria-expanded", "false");
    //   button.setAttribute("type", "button");
    //   button.setAttribute("data-toggle", "collapse");
    //   button.setAttribute("data-target", "#collapse" + index);
    //   button.setAttribute("aria-controls", "collapse" + index);

    //   button.innerHTML = 
    //   `<span> <b>${this.suppliers[index].name}</b></span>
    //    <img class="panelImg" [src]="${this.suppliers[index].photos}" [alt]="${this.suppliers[index].name}">`
      
    //   h2.appendChild(button);
    //   cardHeader.appendChild(h2);
    //   card.appendChild(cardHeader);
    //   document.querySelector(".accordion").appendChild(card);

    //   let collapse = document.createElement("div");
    //   collapse.classList.add("collapse");
    //   collapse.id = "collapse" + index;
    //   collapse.setAttribute("data-parent", "#supplierAccordion");
    //   collapse.setAttribute("aria-labelledby", "heading" + index);
    //   let cardBody = document.createElement("div");
    //   cardBody.classList.add("card-body");
    //   cardBody.innerHTML = `
    //   <div class="row">
    //       <div class="col-md-6">
    //           <p>${this.suppliers[index].address}</p>
    //           <p>${this.suppliers[index].email}</p>
    //           <p>${this.suppliers[index].phoneNumber}</p>
    //           <a [href]="${this.suppliers[index].homepageUrl}">Homepage</a>
    //           <ng-template #dynamic></ng-template>
    //       </div>
    //       <div  class="col-md-6">
    //           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.3433806980293!2d16.37475951570904!3d48.219262179230014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07a5f088dddd%3A0x90f5f684d3ffb483!2sPizza%20Mari!5e0!3m2!1sen!2sat!4v1596627028611!5m2!1sen!2sat" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    //       </div>
    //   </div>
    //   `

    //   // let offers = document.createElement('app-offers') as NgElement & WithProperties<{content: string}>;
    //   let offers = document.createElement('div');
    //   offers.classList.add("offers");
    //   cardBody.appendChild(offers);
    //   collapse.appendChild(cardBody);
    //   document.querySelector(".accordion").appendChild(collapse);
    // }
  }

  loadSuppliers() {
        this.suppliers = this.supService.getSuppliers()

  }


}
