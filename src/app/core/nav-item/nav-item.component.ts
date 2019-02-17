import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.less'],
})
export class NavItemComponent implements OnInit {
  @Input() route: string;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  changeNavigation() {
    this.router.navigate([this.route]);
  };

  isCurrentRoute() {
    var newRoute = this.router.url;
    if(newRoute[0] === '/') {
      newRoute = newRoute.substring(1);
    }
    if(this.route === newRoute) {
      return true;
    } else {
      return false;
    }
  }
}
