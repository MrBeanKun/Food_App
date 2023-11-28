import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../Services/authorization.service'
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthStaffGuard implements CanActivate {

  constructor(private auth : AuthorizationService,private router :Router){

  }
  canActivate(){
     
   console.log(this.auth.isLoggedInStaff())
      if(this.auth.isLoggedInStaff()){
        return true;
      }
      alert("You have not logged in as Staff !");
      this.router.navigate(['']);
    return false;
  }
}
