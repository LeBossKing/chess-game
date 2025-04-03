// src/app/auth/signup/signup.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(): void {
    // Replace with your backend URL
    const url = 'http://localhost:4000/api/user/signup';
    this.http.post(url, {username:this.username, email: this.email, password: this.password }).subscribe({
      next: (response: any) => {
        // Handle successful response, e.g., storing token if provided
        console.log('Signup successful', response);
        // Redirect to game mode selection
        this.router.navigate(['/game-mode']);
      },
      error: (error) => {
        console.error('Signup failed', error);
        alert('Signup failed!');
      }
    });
  }
}