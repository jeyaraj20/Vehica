import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  carDetail=[
    {car:"Hatchback",name:"Hyundai",img:"assets/img/hatchback.jpg",listings:"9/km"},
    {car:"Sedan",name:"Hyundai",img:"assets/img/2021-Hyundai-i30-sedan-red-1001x565-1.jpg",listings:"11/km"},
    {car:"Suv",name:"Ford",img:"assets/img/suv-ford-explorer-hybrid-65.webp",listings:"12/km"},
    {car:"Innova",name:"Toyota",img:"assets/img/2020-toyota-innova-crysta-trd-sportivo-1068x534.jpg",listings:"14/km"}
  ]
  Features=[
{img:"assets/img/checked.png",style:"height:15px; width: 15px;",fav:"No Hidden Charge"},
{img:"assets/img/checked.png",style:"height:15px; width: 15px;",fav:"No Surge Price"},
{img:"assets/img/checked.png",style:"height:15px; width: 15px;",fav:"No Peak Charge"},
{img:"assets/img/checked.png",style:"height:15px; width: 15px;",fav:"Fixed Price Only"},
{img:"assets/img/checked.png",style:"height:15px; width: 15px;",fav:"NO Advance Booking Fee"},
{img:"assets/img/checked.png",style:"height:15px; width: 15px;",fav:"NO Additional Run Time Charge"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
