import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  // user = JSON.parse(localStorage.getItem("user")!);
  getUser() {
    return JSON.parse(localStorage.getItem("user")!);
  }

  isLoggedInManager(): boolean {
    const user = this.getUser();
    console.log(user?.role);
    console.log('Logic gave this value as output');
    return user?.role === "BranchManager";
  }

  isLoggedInStaff(): boolean {
    const user = this.getUser();
    console.log(user?.role);
    console.log('Logic gave this value as output');
    return user?.role === "staff";
  }

  isLoggedInAdmin(): boolean {
    const user = this.getUser();
    console.log(user?.role);
    console.log('Logic gave this value as output');
    return user?.role === "Admin";
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
