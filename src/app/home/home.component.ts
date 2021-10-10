import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/bike.service'
import { CarService } from 'src/app/car.service'
import { SpinnerVisibilityService } from 'ng-http-loader';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  choose=[
    {chooseUs:"Wide range of brands",img:"brands.PNG"},
    {chooseUs:"Trusted by our clients",img:"clients.PNG"},
    {chooseUs:"Fast & easy financing",img:"financing.PNG"}
  ]
  selectedVehicle="Car"
  carClass="vehica-radio vehica-radio--active"
  bikeClass="vehica-radio "
  imgUrl="https://demo.vehicatheme.com/wp-content/uploads/2020/10/bg-1920-new.jpg"
  bikeList: any=[];
  carList: any=[];
  featuredBike:any=[];
  featuredBike1:any=[];
  featuredBike2:any=[];
  featuredBike3:any=[];
  featuredBike4:any=[];
  featuredCar:any=[];
  featuredCar1:any=[];
  featuredCar2:any=[];
  featuredCar3:any=[];
  featuredCar4:any=[];
  visible:boolean=false;
  visibleCar:boolean=false;
  dataList:any=[];
  dataCarList:any=[];
  slicedCarList:any=[];
  slicedBikeList:any=[];

  constructor(public _bikeService: BikeService,public _carService:CarService,private spinner: SpinnerVisibilityService) { }

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
        if(i!=0 && i<5){
        
          this.slicedBikeList.push(this.bikeList.data.bikeList[i]);
        
        }
      this.dataList.push(this.bikeList.data.bikeList[i]);

      }
      
    });

//car

    this._carService.getCarList()
    .subscribe((result) => {
      var i=0;

      this.carList=result;
      var length =  this.carList.data.carList.length;
      console.log(length);
      for(i; i<length; i++){
if(i!=0 && i<5){
  this.slicedCarList.push(this.carList.data.carList[i]);


}
      this.dataCarList.push(this.carList.data.carList[i]);

      }

      // foo?.bar.baz()
      console.log(this.dataCarList);
      
      if(this.carList.data.carList.length >=5){
        this.visibleCar=true;
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

  singleData(car:any,type:any) {
    debugger;
    console.log(car)
    console.log(car.vehicleNumber)
if(type == "bike"){
  this._bikeService.setNewUserInfo({bikes:car
   
  });
}else{
  this._carService.setNewUserInfo({car
   
  });
}
    
  }

  

}
