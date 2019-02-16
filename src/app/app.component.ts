import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'habit-tracker';
  route = 'profile';

  constructor(private router: Router) {}

  ngOnInit(){
    this.router.navigate(['profile']);//Default to profile page on opening.
  }

  changeNavigation(route) {
    this.route = route;
    this.router.navigate([route]);
  };
}
