import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
header: any = [] = [];

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
  this.header = this.carService.getHeader();
  console.log(this.router.url);
  this.getMenu( this.router.url);
  }
  // tslint:disable-next-line:typedef
  getMenu(xyz: string){

    this.carService.activeHeader(xyz);


  }


}
