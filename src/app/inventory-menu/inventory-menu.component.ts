import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-menu',
  templateUrl: './inventory-menu.component.html',
  styleUrls: ['./inventory-menu.component.css']
})
export class InventoryMenuComponent implements OnInit {
carData=[
{  carName:"Mercedes-Benz AMG GT 2-door coupe yellow",price:"$14,600",location:"Los Angeles, CA, USA",year:"2021",gear:"automatic","drive":"front wheel drive","fuel":"petrol"} 
]
  constructor() { }

  ngOnInit(): void {
  }

}
