import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/bike.service'
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  selectedVehicle="Bike"
  bikeClass="vehica-radio vehica-radio--active"
  carClass="vehica-radio "
  imgUrl="assets/img/s1.jfif"
  bikeList: any;
  dataList:any=[];

  constructor(public _bikeService: BikeService,private spinner: SpinnerVisibilityService
    ) { }
  
  ngOnInit(): void {
    this.spinner.show();
    this._bikeService.getBikeList()
    .subscribe((result) => {
      this.spinner.hide();

      var i=0;

      this.bikeList=result;
      var length =  this.bikeList.data.bikeList.length;
      console.log(length);
      for(; i<length; i++){

      this.dataList.push(this.bikeList.data.bikeList[i]);

      }

      // foo?.bar.baz()
      console.log(this.bikeList);
      console.log(this.dataList);

      // console.log(result['data']['bikeList']);





     
    });
  }

  showVehicle(name:any){
    this.selectedVehicle=name;
    if(name == "Car"){
      this.imgUrl='https://demo.vehicatheme.com/wp-content/uploads/2020/10/bg-1920-new.jpg' 
      this.carClass="vehica-radio vehica-radio--active"
      this.bikeClass="vehica-radio "

    }else{
      this.imgUrl='https://i.pinimg.com/originals/24/2b/6c/242b6c05665d8b351f1052d55d3dac1c.jpg' 

      this.carClass="vehica-radio "
      this.bikeClass="vehica-radio vehica-radio--active"

    }
    
  }

  singleData(bikes:any,i:any) {
    debugger;
    console.log(bikes)
    console.log(bikes.vehicleNumber)

    this._bikeService.setNewUserInfo({bikes
    
    });
  }
}
