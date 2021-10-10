import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import{FooterComponent} from "./footer/footer.component";
import{DetailComponent}from "./detail/detail.component";
import{ProductDetailPageComponent}from"./product-detail-page/product-detail-page.component";
import{InventoryMenuComponent}from"./inventory-menu/inventory-menu.component";
import{InventoryComponent}from"./inventory/inventory.component";
import{CarComponent}from"./car/car.component";
import{BikeComponent}from"./bike/bike.component";
import{TravelsComponent}from"./travels/travels.component";
import{SignupPageComponent}from"./signup-page/signup-page.component";
import { ProductCarDetailsComponent } from './product-car-details/product-car-details.component';
import { CarSliderComponent } from './car-slider/car-slider.component';
import{CardSectionComponent} from './card-section/card-section.component';
import{LogisticsComponent}from'./logistics/logistics.component';
import {AboutComponent}from "./about/about.component";
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:SignupPageComponent},
  {path:'car-slider',component:CarSliderComponent},
  {path:'home',component:HomeComponent},
  {path: 'header',component:HeaderComponent},
{path: 'footer',component:FooterComponent},
{path:'detail',component:DetailComponent},
{path:'ProductDetailPage',component:ProductDetailPageComponent},
{path:'ProductCarDetails',component:ProductCarDetailsComponent},
{path:'inventory-menu',component:InventoryMenuComponent},
{path:'inventory',component:InventoryComponent},
{path:'car',component:CarComponent},
{path:"about",component:AboutComponent},
{path:'bike',component:BikeComponent},
{path:'travels',component:TravelsComponent},
{path:'card',component:CardSectionComponent},
{path:'logistics',component:LogisticsComponent},
{ path: '',   redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
