import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface Employee {
  id: string;
  name: string;
  department: string;
  city: string;
  state: string;
  country: string;
  pin: string;
  col1: string;
  col2: string;
}

@Component({
  selector: "app-employeeslist",
  templateUrl: "./employeeslist.component.html",
  styleUrls: ["./employeeslist.component.scss"]
})
export class EmployeeslistComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "name",
    "department",
    "city",
    "state",
    "country",
    "pin",
    "col1",
    "col2"
  ];
  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    const employees: Employee[] = [
      {
        id: "1",
        name: "Rahul Pol",
        department: "Mahima",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "South-Africa",
        pin: "380 051",
        col1: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        col2: "ZYXWVUTSRQPONMLKJIHGFEDCBA"
      },
      {
        id: "2",
        name: "Parul Pol",
        department: "Mahima",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "South-Africa",
        pin: "380 051",
        col1: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        col2: "ZYXWVUTSRQPONMLKJIHGFEDCBA"
      },
      {
        id: "3",
        name: "Maitri Pol",
        department: "Mahima",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "South-Africa",
        pin: "380 051",
        col1: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        col2: "ZYXWVUTSRQPONMLKJIHGFEDCBA"
      },
      {
        id: "4",
        name: "Kaveesh Pol",
        department: "Mahima",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "South-Africa",
        pin: "380 051",
        col1: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        col2: "ZYXWVUTSRQPONMLKJIHGFEDCBA"
      },
      {
        id: "5",
        name: "Champak Pol",
        department: "Venus",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "South-Africa",
        pin: "380 051",
        col1: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        col2: "ZYXWVUTSRQPONMLKJIHGFEDCBA"
      },
      {
        id: "6",
        name: "Sarika Pol",
        department: "Venus",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "South-Africa",
        pin: "380 051",
        col1: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        col2: "ZYXWVUTSRQPONMLKJIHGFEDCBA"
      },
      {
        id: "7",
        name: "Aditi Pol",
        department: "Venus",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "South-Africa",
        pin: "380 051",
        col1: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        col2: "ZYXWVUTSRQPONMLKJIHGFEDCBA"
      },
      {
        id: "8",
        name: "Chandrika Pol",
        department: "Shraddha",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "South-Africa",
        pin: "380 051",
        col1: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        col2: "ZYXWVUTSRQPONMLKJIHGFEDCBA"
      },
      {
        id: "9",
        name: "Kumudini Shinde",
        department: "Shraddha",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "South-Africa",
        pin: "380 051",
        col1: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        col2: "ZYXWVUTSRQPONMLKJIHGFEDCBA"
      },
      {
        id: "10",
        name: "Khushal Shinde",
        department: "Shraddha",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "South-Africa",
        pin: "380 051",
        col1: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        col2: "ZYXWVUTSRQPONMLKJIHGFEDCBA"
      }
    ];
    this.dataSource = new MatTableDataSource(employees);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
