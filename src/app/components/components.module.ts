import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployeeslistComponent } from "./employeeslist/employeeslist.component";
import { LoginComponent } from "./login/login.component";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextFieldModule } from "@angular/cdk/text-field";

@NgModule({
  declarations: [DashboardComponent, EmployeeslistComponent, LoginComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    TextFieldModule
  ],
  exports: [DashboardComponent, EmployeeslistComponent, LoginComponent]
})
export class ComponentsModule {}
