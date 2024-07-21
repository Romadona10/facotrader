// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private verifiedUserId: string | null = null;

  private apiUrl = 'http://localhost:3000/api';

  constructor(private router: Router,private http:HttpClient) {}

  register(fullname: string, nationality: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { fullname, nationality, email, password });
  }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData).pipe(
      map(response => {
        // Assuming the response contains a token if login is successful
        return response;
      }),
      catchError(error => {
        if (error.status === 404) {
          // User not registered
          return of({ message: 'User not registered' });
        }
        return of({ message: 'Invalid credentials' });
      })
    );
  }
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }


  verifyUserId(userId: string): boolean {
    // Replace this logic with actual verification logic
    const  expectedUserId='Romadona 10'
    if (userId.toLocaleLowerCase() === expectedUserId.toLocaleLowerCase()) {
      this.verifiedUserId = userId;
      return true;
    }
    return false;
  }

  isUserIdVerified(): boolean {
    return this.verifiedUserId !== null;
  }

  // login(email: string, password: string): boolean {
  //   // This is a dummy login implementation
  //   // Replace with actual authentication logic
  //   if (email === 'okeke558@gmail.com' && password === '1234') {
  //     this.isAuthenticated = true;
  //     console.log('Login successful, navigating to home-page');
  //     this.router.navigate(['/market-analysis']);
  //     return true;
  //   }
  //   console.log('one or all the user credientials are wrong');
  //   return false;
  // }

  // register(fullName:string,nationality:string,email:string,password:string){
  //    if(fullName ==='okeke ifeanyichukwu' && nationality ==='Nigeria' && email ==='okeke558@gmail.com' && password === '1234' ){
  //     this.isAuthenticated =true;
  //     console.log('registration successful');
  //     this.router.navigate(['/login']);
  //     return true
  //    }
  //    console.log('unable to register');
  //    return false
  // }

  // logout(): void {
  //   this.isAuthenticated = false;
  //   this.router.navigate(['/login']);
  // }

  //  isLoggedIn(): boolean {
  //    return this.isAuthenticated;
  //  }
}
