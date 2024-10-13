import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const options = {
      strings: [".Net Developer", "Software Engineer", "Angular Developer", "Freelancer"],
      typeSpeed: 50,     // Speed of typing
      backSpeed: 50,     // Speed of backspacing
      backDelay: 1500,   // Delay before backspacing
      loop: true         // Whether to loop the typing animation
    };

    const typed = new Typed('.typed', options);
  }

}
