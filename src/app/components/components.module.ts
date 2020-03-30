import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AngmaterialModule } from "../ang-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextFieldModule } from "@angular/cdk/text-field";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployeeslistComponent } from "./employeeslist/employeeslist.component";
import { LoginComponent } from "./login/login.component";
import { PasswordstrengthindicatorComponent } from "./passwordstrengthindicator/passwordstrengthindicator.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { EditprofileComponent } from "./editprofile/editprofile.component";
import { DashboardnewComponent } from "./dashboardnew/dashboardnew.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { LayoutModule } from "@angular/cdk/layout";

const modulelist = [
  DashboardComponent,
  EmployeeslistComponent,
  LoginComponent,
  PasswordstrengthindicatorComponent,
  RegisterComponent,
  ForgotpasswordComponent,
  EditprofileComponent,
  DashboardnewComponent
];

@NgModule({
  declarations: [modulelist],
  imports: [
    CommonModule,
    AngmaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TextFieldModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  exports: [modulelist]
})
export class ComponentsModule {}
