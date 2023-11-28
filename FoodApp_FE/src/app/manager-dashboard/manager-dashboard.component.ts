import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerServiceService } from '../Services/manager-service.service';
import { UserService } from './../Services/user.service';


@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css'],
})
export class ManagerDashboardComponent implements OnInit {
  flag: boolean = false;
  result: any;
  menuFlag = true;
  allStaff: any;
  staffFlag = false;
  manager = JSON.parse(localStorage.getItem('user')!);
  my_menu: any;
  // value: number = 1;
  constructor(private menu: ManagerServiceService, private router: Router,private userService: UserService) {}

  ngOnInit(): void {
    this.menu.getMenu(this.manager.id).subscribe((data) => {
      this.result = data;
      console.log(this.result);
      if (this.result.data.foodProducts.length != 0) {
        this.menuFlag = false;
      } else {
        this.menuFlag = true;
      }
      console.log(this.result);
      console.log(this.manager);
      localStorage.setItem('my_menu', this.result.data.id);
    });

    this.userService.getAllStaffs().subscribe((data) => {
      console.log(data);
      this.allStaff = data;
      this.allStaff = this.allStaff.data;
      this.allStaff =this.allStaff.filter((staff:{ branch: string}) =>staff.branch === this.manager.branch);// Filter based on a specific condition, e.g., role is 'desiredRole'
      
      console.log(this.allStaff);
      if (this.allStaff.length == 0) {
        this.staffFlag = true;
      }
    });
  }
  reply: any;
  deletefp(id: number) {
    console.log('delete btn clicked. Id:' + id);
    this.reply = window.confirm('Are you sure you want to delete the product?');
    console.log(this.reply);
    if (this.reply == true) {
      this.menu.deleteFpData(id).subscribe((response) => {
        console.log(response);
        this.router.navigate(['manager']);
        this.menu.getMenu(this.manager).subscribe((data) => {
          this.result = data;
          console.log(this.result);
        });
      });
      location.reload();
    }
  }

  deleteStaff(id: any) {
    console.log('delete btn clicked. Id:' + id);
    this.reply = window.confirm(
      'Are you sure you want to Fire the Staff Member?'
    );
    console.log(this.reply);
    if (this.reply == true) {
      this.userService.deleteUser(id).subscribe((response) => {
        console.log(response);
        this.router.navigate(['manager']);
        this.userService.getAllStaffs().subscribe((data) => {
          console.log(data);
          this.allStaff = data;
          this.allStaff = this.allStaff.data;
          console.log(this.allStaff);
          if (this.allStaff.length == 0) {
            this.staffFlag = true;
          }
        });
      });
      location.reload();
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
