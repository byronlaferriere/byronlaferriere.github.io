/**
 * This piece of the project calls in TripDataService/Trip/Authentication to implement more features. 
 */

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
//import { trips } from '../data/trips';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication';
/**
 * telling the project where to find needed components for trip-listing
 */

@Component({
selector: 'app-trip-listing',
templateUrl: './trip-listing.component.html',
styleUrls: ['./trip-listing.component.css'],
providers: [TripDataService]
})

//creating exportable class TripListingComponent that will be used in other places in the program

export class TripListingComponent implements OnInit {

//trips: Array<any> = trips;

trips: Trip[];

message: string;


//creating method that uses tripdataservice/authenticationservice/router throughout
constructor(
  private tripDataService: TripDataService,
  private authService: AuthenticationService,
  private router: Router
  ) { }

private addTrip(): void {
  console.log('Inside TripListingComponent#addTrip');
  this.router.navigate(['add-trip']);
}

private getTrips(): void {
  console.log('Inside TripListingComponent#getTrips');
  this.message = 'Searching for trips';
  this.tripDataService
    .getTrips()
    .then(foundTrips => {
      this.message = foundTrips.length > 0 ? '' : 'No trips found';
      this.trips = foundTrips;
     });
}
public isLoggedIn(): boolean{
  return this.authService.isLoggedIn();
}

/**
 * telling program to push data to page if successful
 */
ngOnInit(): void {
 this.getTrips();
  }
}
