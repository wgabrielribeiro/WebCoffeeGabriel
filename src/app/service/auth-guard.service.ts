import { LoginComponent } from './../pages/login/login.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: LoginComponent, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    debugger
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }
    else {
      this.router.navigate(['/login'])
      return false;
    }

  }

}
