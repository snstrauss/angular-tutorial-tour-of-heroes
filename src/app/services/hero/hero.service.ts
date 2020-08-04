import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * services are defined using the '@Injectable' decorator
 */
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // you can inject other injectables (services) into a service
  constructor(private http: HttpClient) { }

  // this is a method of this service, used in heroes component.
  // this one returns a promise (http request)
  // that got transformed to an Observable by the built in http service.
  getHeroes(): Observable<any> {
    return this.http.get('http://snheroes.free.beeceptor.com/heroes');
  }
}
