import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employeeslist",
  templateUrl: "./employeeslist.component.html",
  styleUrls: ["./employeeslist.component.scss"]
})
export class EmployeeslistComponent implements OnInit {
  constructor() {}

  employees: any[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30
  ];
  ngOnInit(): void {}
}
