import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { EmployeeslistComponent } from "./components/employeeslist/employeeslist.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ForgotpasswordComponent } from "./components/forgotpassword/forgotpassword.component";
import { FireauthGuard } from "./fireauth.guard";
import { EditprofileComponent } from "./components/editprofile/editprofile.component";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgotpassword", component: ForgotpasswordComponent },
  {
    path: "profile",
    component: EditprofileComponent,
    canActivate: [FireauthGuard]
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [FireauthGuard]
  },
  {
    path: "employeeslist",
    component: EmployeeslistComponent,
    canActivate: [FireauthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
