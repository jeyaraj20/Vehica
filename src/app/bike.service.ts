import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }
  url=environment.baseUrl;
  // url = 'http://localhost:8000/';

  getBikeList() {
    return this.http.post(this.url+"getBikeList", null);

  }
  private newUser = new BehaviorSubject<any>({
   
    vehicleNumber:'',
    brand:'',
    model:'',
    makingYear: '',
    price:'',
    kilometer: '',
    insurance:'',
    fuelType:'',
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
    this.newUser.next(user);
  }

  getNewUserInfo() {
    return this.newUser.asObservable();
  }
  
}
