import { Injectable } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HEROES } from '../../mock/heroes-mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any> {

    debugger;
    return this.http.get('http://snheroes.free.beeceptor.com/heroes');
  }
}
