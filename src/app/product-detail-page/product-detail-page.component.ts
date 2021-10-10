import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/bike.service'
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})

export class ProductDetailPageComponent implements OnInit {
  bikeInfo: any;
  constructor(public _bikeService: BikeService,private spinner: SpinnerVisibilityService) { }
  viewedBike:any;
  ngOnInit(): void {
    debugger
    this.spinner.show();

    this._bikeService.getNewUserInfo().subscribe(info => {

      this.bikeInfo = info;
     
      if(this.bikeInfo.vehicleNumber== ""){
        this.bikeInfo = JSON.parse(localStorage.getItem('bikeData') || '{}');

       }
       this.viewedBike= this.bikeInfo.bikes.img1;
        localStorage.setItem("bikeData", JSON.stringify(this.bikeInfo));
  
      this.spinner.hide();

      console.log(this.bikeInfo.bikes.brand);
    })


    
  }
  previewCar(img: any){
      this.viewedBike=img
  }

}
