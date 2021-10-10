import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryMenuComponent } from './inventory-menu/inventory-menu.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { CarComponent } from './car/car.component';
import { BikeComponent } from './bike/bike.component';
import { ProductCarDetailsComponent } from './product-car-details/product-car-details.component';
import { TravelsComponent } from './travels/travels.component';
import { CarSliderComponent } from './car-slider/car-slider.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailComponent,
    InventoryComponent,
    InventoryMenuComponent,
    ProductDetailPageComponent,
    CarComponent,
    BikeComponent,
    ProductCarDetailsComponent,
    TravelsComponent,
    CarSliderComponent,
    SignupPageComponent,
    CardSectionComponent,
    LogisticsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
