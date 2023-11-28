import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../Services/authorization.service'
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth : AuthorizationService,private router :Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.auth.isLoggedInManager());
      console.log('Manager got this value');
      if(this.auth.isLoggedInManager()){
        return true;
      }
      alert("You have not logged in as Manager");
      // localStorage.clear();
      this.router.navigate(['']);
      
    return false;
  }
  
}
