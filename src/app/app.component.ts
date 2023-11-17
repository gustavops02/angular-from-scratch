import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  userData =  {
    name: "Joaquim",
    email: "joaquim@example.com",
    role: "USER_ROLE"
  }

  title = 'curso-angular';
}
