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

  heroes: Hero[] = HEROES;

  selectedHero: Hero;

  constructor(private heroService: HeroService) {

    debugger;
    heroService.getHeroes().subscribe(heroes => {
      console.log(heroes);
      debugger;

    });
  }

  ngOnInit(): void {
  }

  chooseHero(hero: Hero): void{
    this.selectedHero = hero;
  }

}
