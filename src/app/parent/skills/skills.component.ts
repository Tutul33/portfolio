import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }

  ngAfterViewInit() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar:any) => {
      const value = bar.getAttribute('aria-valuenow');
      if (value) {
        bar.style.width = value + '%';
      }
    });
  }
}
