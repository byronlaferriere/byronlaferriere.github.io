//(Imported modules needed from angular and created by user for exportable class tripdataservice to work)
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';
import { Trip } from '../models/trip';
import { User } from '../models/user';

//class to be exported
@Injectable()
export class TripDataService {

  constructor(
    private http: Http,
    @Inject(BROWSER_STORAGE) private storage: Storage 
      
    ) { }
//telling program where backend route exists
  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    return this.http
      .post(this.tripUrl, formData) // passing form data in request body
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  //starting code modules for CRUD operations. Using handler errors to catch mistakes before exploitable
  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response.json() as Trip)
      .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get(this.tripUrl)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);

  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#updateTrip');
    console.log(formData);
    return this.http
    .put(this.tripUrl + formData.code, formData)
    .toPromise()
    .then(response => response.json() as Trip[])
    .catch(this.handleError);
   }

   //if error exists in CRUD
  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
//authorizing API calls to backend/DB
  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }
//registering new user
  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }
//Providing route/path for API calls
  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response.json() as AuthResponse)
      .catch(this.handleError);
  }
}
