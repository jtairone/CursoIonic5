import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  authenticated = false;
  constructor(private router: Router) { }
  autentication(a){
      this.authenticated = a;
  }
   canActivate(): boolean {
    if (!this.authenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
    this.router.navigateByUrl('/home');
  }



}
