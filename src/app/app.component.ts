import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { AuthService } from './auth.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { Observable, interval } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crypto-app';

  sidebarOpen: boolean = false;
  isMobile: boolean = window.innerWidth <= 768;

  currentTime!: Observable<Date>;
  currentDate!: Observable<Date>;

  constructor(private authService: AuthService, private router: Router) {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
    this.currentDate = interval(1000).pipe(map(() => new Date()));
  }

  ngOnInit(): void {
    // Hide the sidebar on route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.hideSidebar();
      }
    });

    this.currentTime = interval(1000).pipe(
      map(() => new Date())
    );

    this.currentDate = interval(1000).pipe(
      map(() => new Date())
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.sidebarOpen = true; // Ensure the sidebar is open on larger screens
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    console.log('Sidebar open:', this.sidebarOpen);
    
  }

  hideSidebar(): void {
    if (this.isMobile) {
      this.sidebarOpen = false;
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
