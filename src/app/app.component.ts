import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';
  name = 'Cong Dat';
  isWarning = true;

  show() {
    console.log("Hello Dat");
  }

  tonggleWarning() {
    this.isWarning = !this.isWarning
  }
}
