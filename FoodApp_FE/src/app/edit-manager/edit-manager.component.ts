import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../Services/user.service';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.css']
})
export class EditManagerComponent implements OnInit {
  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  selectedStaff: any;
  result: any;
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.service.getAllUsers().subscribe((data) => {
      this.result = data;
      console.log(this.result.data);

      for (let r of this.result.data) {
        if (r.id == id) {
          this.selectedStaff = r;
          console.log(this.selectedStaff.name);
          break;
        }
      }
    });
  }
  res: any;
  OnSubmit(form: NgForm) {
    console.log(form.value);
    form.value.password = this.selectedStaff.password;
    form.value.id = this.selectedStaff.id;
    form.value.role = this.selectedStaff.role;
    console.log(form.value);

    this.service.updateUser(form.value).subscribe((r) => {
      this.res = r;
      console.log(this.res.message);
      console.log(this.selectedStaff);

      alert(this.res.message);
      this.router.navigate(['/admin']);
    });
  }
}
