import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
header=[
  {manuName:"CAR DETAILS",img:"assets/img/hyundai-creta-discount-388d.jpg",scriptEdien:"Address",address:["1/2a, KK. Nagar","Trichy","PIN:600028"]},
  {manuName:"BIKE DETAILS",img:"assets/img/ktm-rc-3905fd47e21be07d.webp",scriptEdien:"Address",address:["1/2a, KK. Nagar","Trichy","PIN:600028"]},
  {manuName:"TRAVELS",img:"assets/img/taxi.jfif",scriptEdien:"Address",address:["1/2a, KK. Nagar","Trichy","PIN:600028"]}
]
  constructor() { }

  ngOnInit(): void {
  }
  
}
