import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { MatDialog } from '@angular/material/dialog';
import { TradingJournalModalComponent } from './trading-journal-modal/trading-journal-modal.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private dialog: MatDialog, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check if user is logged in
    if (!this.authService.isLoggedIn()) {
      console.log('AuthGuard: User not logged in, redirecting to /login');
      this.router.navigate(['/login']);
      return false;
    }

    // Determine access based on route
    const routePath = route.routeConfig?.path;
    console.log('AuthGuard: Route path', routePath);

    if (routePath === 'trading-journal') {
      // Always show the modal for trading journal route
      const dialogRef = this.dialog.open(TradingJournalModalComponent, {
        disableClose:true, 
        width: '1000px',

       
        
      });

      // After modal closes, return observable with result
      return dialogRef.afterClosed().pipe(
        map(result => {
          if (result === true) {
            return true; // Authorized
          } else {
            this.router.navigate(['/market-analysis']);
            return false; // Not authorized
          }
        })
      );
    }

    // Default case: allow access to other components when logged in
    return true;
  }
}
