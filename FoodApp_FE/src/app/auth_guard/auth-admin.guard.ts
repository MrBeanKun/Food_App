import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../Services/authorization.service'
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(private auth : AuthorizationService,private router :Router){

  }
  canActivate(){
      console.log(this.auth.isLoggedInAdmin())
      
      if(this.auth.isLoggedInAdmin()){
        return true;
      }
      alert("You have not logged in as Admin !");
      this.router.navigate(['']);
    return false;
  }
  
}
