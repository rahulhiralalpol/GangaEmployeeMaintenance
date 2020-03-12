import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployeeslistComponent } from "./employeeslist/employeeslist.component";

@NgModule({
  declarations: [DashboardComponent, EmployeeslistComponent],
  imports: [CommonModule],
  exports: [DashboardComponent, EmployeeslistComponent]
})
export class ComponentsModule {}
