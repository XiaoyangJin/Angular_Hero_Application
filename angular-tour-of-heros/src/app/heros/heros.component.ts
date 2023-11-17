import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import {
  NgFor, NgIf, UpperCasePipe,
} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe
  ],
})
export class HerosComponent {
  heroes = HEROES;
}
