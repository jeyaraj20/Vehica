import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-product-car-details',
  templateUrl: './product-car-details.component.html',
  styleUrls: ['./product-car-details.component.css']
})
export class ProductCarDetailsComponent implements OnInit {
  carInfo: any;
  viewedBike: any;
  // tslint:disable-next-line:variable-name
  constructor( public _carService: CarService, private spinner: SpinnerVisibilityService) { }

  ngOnInit(): void {  
    this.spinner.show();

    this._carService.getNewCarInfo().subscribe(info => {
     
      this.spinner.hide();
      
      this.carInfo = info;
     if(this.carInfo.vehicleNumber== ""){
      this.carInfo = JSON.parse(localStorage.getItem('carData') || '{}');
     }
     this.viewedBike=this.carInfo.car.img1

     localStorage.setItem("carData", JSON.stringify(this.carInfo));

    })
  }
  previewCar(img: any){
    
    this.viewedBike=img
}



}

