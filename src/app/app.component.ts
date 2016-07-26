import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ApiService } from './shared';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  url = 'https://github.com/DSchau/angular2-webpack-simple';
  puppy = require('../assets/images/puppy.jpg');
  constructor(private api: ApiService) {
  }
}
