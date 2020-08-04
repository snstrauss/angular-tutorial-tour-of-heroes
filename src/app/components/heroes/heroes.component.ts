import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HEROES } from '../../mock/heroes-mock';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'sn-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // type definitions for this components properties
  heroes: Hero[] = [];
  selectedHero: Hero;

  // the constructor is used for injecting the dependencies into the component scope.
  constructor(private heroService: HeroService) {}

  loadHeroes(): void{
    // heroService.getHeroes() returns an Observable (RX), which in this case is used like a promise
    // the .subscribe() method in this case is just like the '.then()' method.
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  // this runs on init
  ngOnInit(): void {
    this.loadHeroes();
  }

  // this is component method, which can be used in the template.
  chooseHero(hero: Hero): void{
    this.selectedHero = hero;
  }

}
