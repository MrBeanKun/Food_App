import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { MangStaffComponent } from './mang-staff/mang-staff.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { StaffComponent } from './staff/staff.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddFpComponent } from './add-fp/add-fp.component';
import { EditFpComponent } from './edit-fp/edit-fp.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'
import { EditManagerComponent } from './edit-manager/edit-manager.component';
import { AuthGuard } from './auth_guard/auth.guard';
import { AuthAdminGuard } from './auth_guard/auth-admin.guard';
import { AuthStaffGuard } from './auth_guard/auth-staff.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegistrationComponent,canActivate:[AuthAdminGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'manager', component: ManagerDashboardComponent,canActivate:[AuthGuard]},
  { path: 'staff', component: StaffComponent,canActivate:[AuthStaffGuard]},
  { path: 'add-fp', component: AddFpComponent,canActivate:[AuthGuard]},
  { path: 'edit-fp/:id', component: EditFpComponent,canActivate:[AuthGuard]},
  { path: 'create-order', component: CreateOrderComponent,canActivate:[AuthStaffGuard]},
  { path: 'edit-order/:id', component: EditOrderComponent,canActivate:[AuthStaffGuard]},
  { path: 'showStaff', component: MangStaffComponent,canActivate:[AuthGuard]},
  { path: 'addStaff', component: AddStaffComponent,canActivate:[AuthGuard]},
  { path: 'admin', component:AdminDashboardComponent,canActivate:[AuthAdminGuard]},
  { path: 'editStaff/:id', component: EditStaffComponent,canActivate:[AuthGuard]},
  { path: 'editProfile/:id', component: EditProfileComponent },
  { path: 'editManager/:id', component:EditManagerComponent,canActivate:[AuthAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
