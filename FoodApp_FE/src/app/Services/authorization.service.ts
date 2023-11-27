import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  user = JSON.parse(localStorage.getItem("user")!);
  isLoggedInManager(){
    if(this.user!=null && this.user.role === "BranchManager"){
      return true;
    }else {
      return false
    }
  }
  isLoggedInStaff(){
    if(this.user!=null && this.user.role === "staff"){
      return true;
    }else {
      return false
    }
  }
  // isLoggedIn(){
  //   if (this.user !== null) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  isLoggedIn(): boolean {
    return !localStorage.getItem('user');
  }  
}
