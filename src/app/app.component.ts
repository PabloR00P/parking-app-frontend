import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isEntryRoute: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isEntryRoute =
          event.url === '/entry' ||
          event.url === '/types' ||
          event.url === '/official' ||
          event.url === '/resident' ||
          event.url === '/payment-report' ||
          event.url === '/start-month' ||
          event.url === '/exit';
      }
    });
  }
  title = 'parking-app-frontend';
}
