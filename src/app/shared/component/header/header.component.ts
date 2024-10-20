import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user:any;
  isAuthenticated:boolean=false;
  constructor(private authService:AuthService){

  }

  scrollToSection(section: string): void {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
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
    return this.authService.signOut();
  }
}
