import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  buttons: SidebarButton[] = [
    { name: "Dashboard", routerlink: "dashboard", icon: "dashboard" },
    { name: "Employees", routerlink: "employeeslist", icon: "face" }
  ];

  ngOnInit(): void {}
}
