import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    router: Router
  ) {
    router.events
          .pipe(filter((routerEvent: Event) => routerEvent instanceof NavigationEnd))
          .subscribe(() => window.scrollTo(0, 0));
  }
  
  title = 'read-faster';

 
}

