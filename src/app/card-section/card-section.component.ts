import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent implements OnInit {
texiCard=[
  {detail:"Hatch Back",img:"assets/img/hatch.png", price:"10 RS"},
  {detail:"Sedan",img:"assets/img/sedan.png", price:"11 RS"},
  {detail:"SUV",img:"assets/img/suv.png", price:"14 RS"},
  {detail:"Innova",img:"assets/img/innova.png", price:"15 RS"}
]
  constructor() { }

  ngOnInit(): void {
  }

}
