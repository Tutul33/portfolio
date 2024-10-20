import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder,private authService:AuthService){

  }
  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]     
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Process form data
      this.authService.signIn(this.loginForm.value.email,this.loginForm.value.password);
    } else {
      this.loginForm.markAllAsTouched(); // Trigger validation messages
    }
  }
}
