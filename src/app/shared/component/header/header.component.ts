import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user:any;
  isAuthenticated:boolean=false;
  constructor(private authService:AuthService,private router:Router){

  }
  
  goToLinkSection(sectionName: string): void {
    this.router.navigateByUrl('/').then(() => {
      // Wait for navigation to complete
      this.scrollToSection(sectionName);
    });
  }

  scrollToSection(section: string): void {
   setTimeout(() => {
      const targetElement = document.getElementById(section);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
   }, 0); // Slight delay to ensure DOM is ready
  }

  getAuthenticated(){
    this.authService.isAuthenticated().subscribe(user => {
      this.user = user; // Set the user if authenticated
      if (user) {
        this.isAuthenticated=true;
        // console.log('User is authenticated:', user);
      } else {
        this.isAuthenticated=false;
        // console.log('User is not authenticated');
      }
    });
  }

  signOut(){
    this.router.navigate(['/login']);
    this.authService.signOut();
  }
}
