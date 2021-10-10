import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  userId: any;
  formGroup = new FormGroup({

    userId: new FormControl(''),
    vehicleModel: new FormControl('', [
        Validators.required,
      ]),
      vehicleName: new FormControl('', [
        Validators.required,
      ]),
      vehicleType: new FormControl('', [
        Validators.required,
      ]),
      currentLocation: new FormControl('', [
        Validators.required,
      ]),
      mobileNo: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]),
      custameomerName: new FormControl('', [
        Validators.required,
      ]),
      fuelType: new FormControl('', [
        Validators.required,
      ]),
      price: new FormControl('', [
        Validators.required,
      ]),
      kiloMeter: new FormControl('', [
        Validators.required,
      ]),
      fc: new FormControl('', [
        Validators.required,
      ]),
      insurance: new FormControl('', [
        Validators.required,
      ]),
      vehicleNo: new FormControl('', [
        Validators.required,
      ]),

    });

  constructor(public carService: CarService, public  router: Router, ) { }

 ngOnInit(): void {

}
onReset(): void {
this.formGroup.reset();
}

onSubmit(): void {
  this.carService.createUser(this.formGroup.value).subscribe((data: any) => {
   console.log(this.formGroup.value);
   alert(data.message);
   this.router.navigate( ['/home'] );

  });
}
}

