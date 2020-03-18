import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployeeslistComponent } from "./employeeslist/employeeslist.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [DashboardComponent, EmployeeslistComponent, LoginComponent],
  imports: [CommonModule],
  exports: [DashboardComponent, EmployeeslistComponent, LoginComponent]
})
export class ComponentsModule {}
