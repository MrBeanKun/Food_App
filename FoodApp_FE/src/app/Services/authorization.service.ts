import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  user = JSON.parse(localStorage.getItem("user")!);
  isLoggedInManager(){
    console.log(this.user.role);
    console.log('Logic gave this value as output');
    if(this.user.role === "BranchManager"){
      return true;
    }else {
      return false
    }
  }
  isLoggedInStaff(){
    console.log(this.user.role);
    console.log('Logic gave this value as output');
    if( this.user.role === "staff"){
      return true;
    }else {
      return false
    }
  }

  isLoggedInAdmin(){
    console.log(this.user.role);
    console.log('Logic gave this value as output');
    if(this.user.role === "Admin"){
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
