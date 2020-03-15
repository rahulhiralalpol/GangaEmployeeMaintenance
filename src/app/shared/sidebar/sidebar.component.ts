import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
export interface SidebarButton {
  name: string;
  routerlink: string;
  icon: string;
}
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  buttons: SidebarButton[] = [
    { name: "Dashboard", routerlink: "dashboard", icon: "account_circle" },
    { name: "Employees", routerlink: "employeeslist", icon: "menu" }
    // { name: "Employee Details", routerlink: "a", icon: "face" }
  ];

  ngOnInit(): void {}

  // openDashboard() {
  //   this.router.navigate(["/dashboard"]);
  // }

  // openEmployees() {
  //   this.router.navigate(["/employeeslist"]);
  // }
}
