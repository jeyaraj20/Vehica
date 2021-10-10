import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  selectedVehicle="Car"
  carClass="vehica-radio vehica-radio--active"
  bikeClass="vehica-radio "
  imgUrl="https://demo.vehicatheme.com/wp-content/uploads/2020/10/bg-1920-new.jpg"
  carList: any;
  dataList:any=[];

  constructor(public _carService: CarService,private spinner: SpinnerVisibilityService) { }

  ngOnInit(): void {
    debugger;
    this.spinner.show();
    this._carService.getCarList()
      .subscribe((result) => {
        this.carList = result;
        console.log(this.carList);
        this.spinner.hide();

        var i=0;
        var length =  this.carList.data.carList.length;
        console.log(length);
        for(let i=0; i<length; i++){
  
        this.dataList.push(this.carList.data.carList[i]);
  
        }


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

  singleData(car:any,i:any) {
    debugger;
    console.log(car)
    console.log(car.vehicleNumber)

    this._carService.setNewUserInfo({car
   
    });
  }

}
