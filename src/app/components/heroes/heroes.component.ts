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

  heroes: Hero[] = [];

  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  loadHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  ngOnInit(): void {
    this.loadHeroes();
  }

  chooseHero(hero: Hero): void{
    this.selectedHero = hero;
  }

}
