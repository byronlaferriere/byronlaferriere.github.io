//importing component module
import { Component } from '@angular/core';


//supplying styling and selectors
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//class to be exported throughout program
export class AppComponent {
  title = 'Traveler Admin';
}
