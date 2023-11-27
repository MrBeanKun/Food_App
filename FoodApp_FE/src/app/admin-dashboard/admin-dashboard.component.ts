import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerServiceService } from '../Services/manager-service.service';
import { UserService } from './../Services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  flag: boolean = false;
  result: any;
  allStaff: any;
  staffFlag = false;
  manager = JSON.parse(localStorage.getItem('user')!);
  
  // value: number = 1;
  constructor(private menu: ManagerServiceService, private router: Router,private userService: UserService) {}

  ngOnInit(): void {
    
    this.userService.getAllUsers().subscribe((data) => {
      console.log(data);
      this.allStaff = data;

      
      this.allStaff = this.allStaff.data;
      

      // Filter based on a specific condition, e.g., role is 'desiredRole'
      this.allStaff = this.allStaff.filter((staff: { role: string }) => staff.role === 'BranchManager');



      console.log(this.allStaff);
      if (this.allStaff.length == 0) {
        this.staffFlag = true;
      }
    });
  }
  reply: any;
  

  deleteStaff(id: any) {
    console.log('delete btn clicked. Id:' + id);
    this.reply = window.confirm(
      'Are you sure you want to Fire the manager Member?'
    );
    console.log(this.reply);
    if (this.reply == true) {
      this.userService.deleteUser(id).subscribe((response) => {
        console.log(response);
        this.router.navigate(['admin']);
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


}
