/**
 * This section of code calls input and authentication from previously defined services. This data is used to populate the cards
 * created within the trips section of the web page. We have our trips json data from the models, the authentication service for 
 * the jwt's, and tripdataservice.
 */
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication';
import { TripDataService } from '../services/trip-data.service';

/**Telling where to look for page design, and layout */
@Component({
selector: 'app-trip-card',
templateUrl: './trip-card.component.html',
styleUrls: ['./trip-card.component.css']
})
/**
 * Telling program to make this class exportable, to be used in other areas of program. Implementing Angular OnInit() loop with 
 * startup commands
 */
export class TripCardComponent implements OnInit {

@Input('trip') trip: any;
constructor(
    private router: Router,
    private authService: AuthenticationService
) { }

ngOnInit(): void { 
  
}

private editTrip(trip: Trip): void {
    console.log('Inside TripListingComponent#editTrip');
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
}

public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
}
}
