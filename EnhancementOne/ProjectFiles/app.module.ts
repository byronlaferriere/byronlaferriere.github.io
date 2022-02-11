//one of the main pieces of the program. Importing all of created components to be used and help control how program runs

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripDataService } from './services/trip-data.service';
import { AddTripComponent } from './add-trip/add-trip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

//declaring modules created
@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
       
  ],
  //importing needed modules
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],

  //describing providers to use
  providers: [
    TripDataService
  ],
  
//telling page which components will supply bootstrapping designs and styles
  bootstrap: [AppComponent, NavbarComponent]
  
})

//class to be exported and used
export class AppModule { }
