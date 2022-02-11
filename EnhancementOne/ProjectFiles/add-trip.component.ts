/**
 * This piece of the project calls in addtripcomponent to implement more features. 
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';

/**
 * telling the project where to find needed components of add-trip
 */
@Component({
selector: 'app-add-trip',
templateUrl: './add-trip.component.html',
styleUrls: ['./add-trip.component.css']
})
/**
 * creating an exportable class that can be called by other pieces
 */
export class AddTripComponent implements OnInit {

addForm: FormGroup;
submitted = false;

constructor(
 private formBuilder: FormBuilder,
 private router: Router,
 private tripService: TripDataService
) { }

/**
 * supplying the add-trip page with a validator that checks for proper input values
 */
ngOnInit() {
 this.addForm = this.formBuilder.group({
 _id: [],
 code: ['', Validators.required],
 name: ['', Validators.required],
 length: ['', Validators.required],
 start: ['', Validators.required],
 resort: ['', Validators.required],
 perPerson: ['', Validators.required],
 image: ['', Validators.required],
 description: ['', Validators.required],
 })
}

/**
 * telling program to push data through to console output if add successful
 */
onSubmit() {
 this.submitted = true;
 if(this.addForm.valid){
 this.tripService.addTrip(this.addForm.value)
 .then( data => {
 console.log(data);
 this.router.navigate(['']);
 });
 }
}
// get the form short name to access the form fields
get f() { return this.addForm.controls; }
}