// src/app/auth/login/login.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(): void {
    // Replace with your backend URL
    const url = 'http://localhost:4000/api/user/login';
    this.http.post(url, { email: this.email, password: this.password }).subscribe({
      next: (response: any) => {
        // Handle successful response, e.g., storing token if provided
        console.log('Login successful', response);
        // Redirect to game mode selection
        this.router.navigate(['/game-mode']);
      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Login failed!');
      }
    });
  }
}