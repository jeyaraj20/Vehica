import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }
  url=environment.baseUrl;
  header=[
    {menuName:"Home",routerlink:"/home",active:true},
  {menuName:"Car",routerlink:"/car",active:false},
  {menuName:"Bike",routerlink:"/bike",active:false},
  {menuName:"Travels",routerlink:"/travels",active:false},
  {menuName:"Logistics",routerlink:"/logistics",active:false},
  {menuName:"Contact us",routerlink:"/register",active:false},
  {menuName:"About",routerlink:"/about",active:false},
  {menuName:"Sell",routerlink:"/detail",active:false},


  ]
  // url = 'http://localhost:8000/';

  getCarList() {
    return this.http.post(this.url+"getCarList", null);

  }
  createUser( data: any) {
  return this.http.post(this.url + 'user/createUser', data);
   }
  // createUser(data) {
  //   return this.http.post("http://localhost:8000/user/createUser", data);
  // }
getHeader(){
  return this.header;
}
  activeHeader(xyz: string){
    this.header.map((item) =>{
      if(item.active){
        item.active=false;
      }
     if(xyz == item.routerlink){
      item.active=true;
     }
      
    })
  }
  private newCar = new BehaviorSubject<any>({
   
    vehicleNumber:'',
    brand:'',
    model:'',
    makingYear: '',
    price:'',
    kilometer: '',
    insurance:'',
    fuelType:'',
    carType:'',
    img1:'',
    img2:'',
    img3:'',
    img4:'',
    img5:'',
    img6:'',
    img7:'',
    img8:'',
    img9:'',
    img10:'',
    img11:'',
    img12:''
  });

  setNewUserInfo(user: any) {
    debugger;
    console.log(user)
    this.newCar.next(user);
  }

  getNewCarInfo() {
    return this.newCar.asObservable();
  }
}
