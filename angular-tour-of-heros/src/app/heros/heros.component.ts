import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { /* . . . */
  NgFor,
  /* . . . */
} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
  imports: [
    NgFor,
  ],
})
export class HerosComponent {
  heroes = HEROES;
}
