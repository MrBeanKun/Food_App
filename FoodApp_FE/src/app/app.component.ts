import { Router } from '@angular/router';
import { Component, DoCheck } from '@angular/core';
import {AuthorizationService} from 'src/app/Services/authorization.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  title = 'FoodApp';
  constructor(private router: Router,private auth:AuthorizationService) {}
  ngDoCheck(): void {
    this.isLoggedin = this.auth.isLoggedIn();
    console.log(this.isLoggedin);
    console.log("I adithyan created this flag");
  }
  user: any;
  isLoggedin:boolean | undefined;

  // ngOnInit(): void {
  //   this.isLoggedin = this.auth.isLoggedIn();
  //   console.log(this.isLoggedin);
  //   console.log("I adithyan created this flag");
  // }
  


  goDashboard() {
    try {
      this.user = JSON.parse(localStorage.getItem('user')!);
      if (this.user.role != null) {
        console.log(this.user);
        let role = this.user.role;
        if (role === 'staff') {
          console.log('Staff Dashboard');
          this.router.navigate(['staff']);
        } else if (role === 'BranchManager') {
          console.log('Manager Dashboard');
          this.router.navigate(['manager']);
        }
      }
    } catch (error) {
      alert('Please Login First!');
      this.router.navigate(['login']);
    }
  }
  logout() {
    
    const confirmLogout = window.confirm('Are you sure you want to logout?');

    if (confirmLogout) {
      localStorage.clear();
      this.router.navigate(['/login']);
    }

  }

  checkIfLogin() {
    try {
      this.user = JSON.parse(localStorage.getItem('user')!);
      if (this.user.role != null) {
        alert('You are already Logged into your account!');
        if (this.user.role != null) {
          console.log(this.user);
          let role = this.user.role;
          if (role === 'staff') {
            console.log('Staff Dashboard');
            this.router.navigate(['staff']);
          } else if (role === 'BranchManager') {
            console.log('Manager Dashboard');
            this.router.navigate(['manager']);
          }
        }
      }
    } catch (error) {
      this.router.navigate(['login']);
    }
  }
  goEditProfile() {
    try {
      this.user = JSON.parse(localStorage.getItem('user')!);
      console.log(this.user.id);
      console.log(this.user);
      this.router.navigate(['editProfile', this.user.id]);
    } catch (error) {
      alert('Please Login First!');
      this.router.navigate(['login']);
    }
  }
}
