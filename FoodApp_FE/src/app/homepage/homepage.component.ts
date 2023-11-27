import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from 'src/app/Services/authorization.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  isLoggedin: boolean | undefined;
  constructor(private router: Router,private auth:AuthorizationService) {}
  user: any;

  current_user = JSON.parse(localStorage.getItem('user')!);















  ngOnInit(): void {

    this.isLoggedin = this.auth.isLoggedIn();

    const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval: NodeJS.Timeout | null = null;

const h1Element = document.querySelector("#text h3") as HTMLHeadingElement;

// Store the original data
let originalData: string = h1Element.innerText;

//h1Element.onmouseover = () => {
  let iteration: number = 0;

  clearInterval(interval!);

  interval = setInterval(() => {
    h1Element.innerText = h1Element.innerText
      .split("")
      .map((_, index) => {
        if (index < iteration) {
          return originalData[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= originalData.length) {
      clearInterval(interval!);
      h1Element.innerText = originalData; // Ensure the final text is the original data
    }

    iteration += 1 / 3;
  }, 50);

//};


















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
}
