import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrollToSection(section: string): void {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
