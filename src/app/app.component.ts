import { Component } from '@angular/core';

/**
 * the @Component decorator is used to provide the component with some meta data:
 *
 * selector:
 * the tagname of the component element (this one is used in index.html)
 *
 * templateUrl:
 * path for the html representing the template for this component
 *
 * styleUrls:
 * path for the stylesheets used in this component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'angular-tour-of-heroes';
  newTitle = 'angular app death';
}
