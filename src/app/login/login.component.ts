import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  header=[
    {manuName:"For CAR",img:"assets/img/hyundai-creta-discount-388d.jpg",scriptEdien:"Address",address:["1/2a, KK. Nagar","Trichy","PIN:600028"]},
    {manuName:"For BIKE",img:"assets/img/ktm-rc-3905fd47e21be07d.webp",scriptEdien:"Address",address:["1/2a, KK. Nagar","Trichy","PIN:600028"]},
    {manuName:"For TRAVELS",img:"assets/img/taxi.jfif",scriptEdien:"Address",address:["1/2a, KK. Nagar","Trichy","PIN:600028"]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
