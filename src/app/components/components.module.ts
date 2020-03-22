import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployeeslistComponent } from "./employeeslist/employeeslist.component";
import { LoginComponent } from "./login/login.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextFieldModule } from "@angular/cdk/text-field";
import { AngmaterialModule } from "../ang-material.module";
import { PasswordstrengthindicatorComponent } from "./passwordstrengthindicator/passwordstrengthindicator.component";

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeslistComponent,
    LoginComponent,
    PasswordstrengthindicatorComponent
  ],
  imports: [
    CommonModule,
    AngmaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TextFieldModule
  ],
  exports: [
    DashboardComponent,
    EmployeeslistComponent,
    LoginComponent,
    PasswordstrengthindicatorComponent
  ]
})
export class ComponentsModule {}
