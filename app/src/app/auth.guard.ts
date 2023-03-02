import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';




export const canActivateNewFormat: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    console.log("canActivateNewFormat çalıştı");
    if (inject(AuthService).isAuthenticate()) {
      return true;
    }
    return inject(Router).navigateByUrl("/login")
  };




@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {


  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log("canActivate çalıştı")
    // console.log(route);
    // console.log(state);
    if (this.authService.isAuthenticate()) {
      return true
    }

    this.router.navigateByUrl("/login")

    return false;
  }

}
