import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tutul Chakma - iProfile';
  ngOnInit(){
    this.initPreloader();
    this.initScrollTopButton();
  }
  private initPreloader(): void {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  }
  /**
   * Scroll top button
   */
  private initScrollTopButton(): void {
    const scrollTop = document.querySelector('.scroll-top');
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    };

    scrollTop?.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  }
}