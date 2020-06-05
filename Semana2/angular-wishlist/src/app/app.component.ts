import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-wishlist';

  time = new Observable(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  destinoAgregado(d) {

  }

}
