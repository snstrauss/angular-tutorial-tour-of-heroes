import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'sn-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // data that comes from out of the component needs to be declared using the '@Input' decorator
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
