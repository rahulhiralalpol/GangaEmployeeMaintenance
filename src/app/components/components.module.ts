import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployeeslistComponent } from "./employeeslist/employeeslist.component";
import { LoginComponent } from "./login/login.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [DashboardComponent, EmployeeslistComponent, LoginComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [DashboardComponent, EmployeeslistComponent, LoginComponent]
})
export class ComponentsModule {}
