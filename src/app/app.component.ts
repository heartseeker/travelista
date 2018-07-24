import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private route: Router) {}

  url: string;

  ngOnInit() {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd ) {
        this.url = event.url;
      }
  });
  }
}
