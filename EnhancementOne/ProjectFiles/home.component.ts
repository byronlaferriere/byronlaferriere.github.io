/**
 * This piece of the project calls in Component and angular features (oninit) to implement more features. 
 */
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

/**
 * Creating new class HomeComponent to be used in other modules
 */
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
