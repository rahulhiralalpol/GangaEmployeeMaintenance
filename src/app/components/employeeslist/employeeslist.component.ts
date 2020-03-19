import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface Employee {
  id: string;
  name: string;
  department: string;
}

@Component({
  selector: "app-employeeslist",
  templateUrl: "./employeeslist.component.html",
  styleUrls: ["./employeeslist.component.scss"]
})
export class EmployeeslistComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "department"];
  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    const employees: Employee[] = [
      { id: "1", name: "Rahul Pol", department: "Mahima" },
      { id: "2", name: "Parul Pol", department: "Mahima" },
      { id: "3", name: "Maitri Pol", department: "Mahima" },
      { id: "4", name: "Kaveesh Pol", department: "Mahima" },
      { id: "5", name: "Champak Pol", department: "Venus" },
      { id: "6", name: "Sarika Pol", department: "Venus" },
      { id: "7", name: "Aditi Pol", department: "Venus" },
      { id: "8", name: "Chandrika Pol", department: "Shraddha" },
      { id: "9", name: "Kumudini Shinde", department: "Shraddha" },
      { id: "10", name: "Khushal Shinde", department: "Shraddha" },
      { id: "1", name: "Rahul Pol", department: "Mahima" },
      { id: "2", name: "Parul Pol", department: "Mahima" },
      { id: "3", name: "Maitri Pol", department: "Mahima" },
      { id: "4", name: "Kaveesh Pol", department: "Mahima" },
      { id: "5", name: "Champak Pol", department: "Venus" },
      { id: "6", name: "Sarika Pol", department: "Venus" },
      { id: "7", name: "Aditi Pol", department: "Venus" },
      { id: "8", name: "Chandrika Pol", department: "Shraddha" },
      { id: "9", name: "Kumudini Shinde", department: "Shraddha" },
      { id: "10", name: "Khushal Shinde", department: "Shraddha" },
      { id: "1", name: "Rahul Pol", department: "Mahima" },
      { id: "2", name: "Parul Pol", department: "Mahima" },
      { id: "3", name: "Maitri Pol", department: "Mahima" },
      { id: "4", name: "Kaveesh Pol", department: "Mahima" },
      { id: "5", name: "Champak Pol", department: "Venus" },
      { id: "6", name: "Sarika Pol", department: "Venus" },
      { id: "7", name: "Aditi Pol", department: "Venus" },
      { id: "8", name: "Chandrika Pol", department: "Shraddha" },
      { id: "9", name: "Kumudini Shinde", department: "Shraddha" },
      { id: "10", name: "Khushal Shinde", department: "Shraddha" },
      { id: "1", name: "Rahul Pol", department: "Mahima" },
      { id: "2", name: "Parul Pol", department: "Mahima" },
      { id: "3", name: "Maitri Pol", department: "Mahima" },
      { id: "4", name: "Kaveesh Pol", department: "Mahima" },
      { id: "5", name: "Champak Pol", department: "Venus" },
      { id: "6", name: "Sarika Pol", department: "Venus" },
      { id: "7", name: "Aditi Pol", department: "Venus" },
      { id: "8", name: "Chandrika Pol", department: "Shraddha" },
      { id: "9", name: "Kumudini Shinde", department: "Shraddha" },
      { id: "10", name: "Khushal Shinde", department: "Shraddha" },
      { id: "1", name: "Rahul Pol", department: "Mahima" },
      { id: "2", name: "Parul Pol", department: "Mahima" },
      { id: "3", name: "Maitri Pol", department: "Mahima" },
      { id: "4", name: "Kaveesh Pol", department: "Mahima" },
      { id: "5", name: "Champak Pol", department: "Venus" },
      { id: "6", name: "Sarika Pol", department: "Venus" },
      { id: "7", name: "Aditi Pol", department: "Venus" },
      { id: "8", name: "Chandrika Pol", department: "Shraddha" },
      { id: "9", name: "Kumudini Shinde", department: "Shraddha" },
      { id: "10", name: "Khushal Shinde", department: "Shraddha" },
      { id: "1", name: "Rahul Pol", department: "Mahima" },
      { id: "2", name: "Parul Pol", department: "Mahima" },
      { id: "3", name: "Maitri Pol", department: "Mahima" },
      { id: "4", name: "Kaveesh Pol", department: "Mahima" },
      { id: "5", name: "Champak Pol", department: "Venus" },
      { id: "6", name: "Sarika Pol", department: "Venus" },
      { id: "7", name: "Aditi Pol", department: "Venus" },
      { id: "8", name: "Chandrika Pol", department: "Shraddha" },
      { id: "9", name: "Kumudini Shinde", department: "Shraddha" },
      { id: "10", name: "Khushal Shinde", department: "Shraddha" },
      { id: "1", name: "Rahul Pol", department: "Mahima" },
      { id: "2", name: "Parul Pol", department: "Mahima" },
      { id: "3", name: "Maitri Pol", department: "Mahima" },
      { id: "4", name: "Kaveesh Pol", department: "Mahima" },
      { id: "5", name: "Champak Pol", department: "Venus" },
      { id: "6", name: "Sarika Pol", department: "Venus" },
      { id: "7", name: "Aditi Pol", department: "Venus" },
      { id: "8", name: "Chandrika Pol", department: "Shraddha" },
      { id: "9", name: "Kumudini Shinde", department: "Shraddha" },
      { id: "10", name: "Khushal Shinde", department: "Shraddha" },
      { id: "1", name: "Rahul Pol", department: "Mahima" },
      { id: "2", name: "Parul Pol", department: "Mahima" },
      { id: "3", name: "Maitri Pol", department: "Mahima" },
      { id: "4", name: "Kaveesh Pol", department: "Mahima" },
      { id: "5", name: "Champak Pol", department: "Venus" },
      { id: "6", name: "Sarika Pol", department: "Venus" },
      { id: "7", name: "Aditi Pol", department: "Venus" },
      { id: "8", name: "Chandrika Pol", department: "Shraddha" },
      { id: "9", name: "Kumudini Shinde", department: "Shraddha" },
      { id: "10", name: "Khushal Shinde", department: "Shraddha" },
      { id: "1", name: "Rahul Pol", department: "Mahima" },
      { id: "2", name: "Parul Pol", department: "Mahima" },
      { id: "3", name: "Maitri Pol", department: "Mahima" },
      { id: "4", name: "Kaveesh Pol", department: "Mahima" },
      { id: "5", name: "Champak Pol", department: "Venus" },
      { id: "6", name: "Sarika Pol", department: "Venus" },
      { id: "7", name: "Aditi Pol", department: "Venus" },
      { id: "8", name: "Chandrika Pol", department: "Shraddha" },
      { id: "9", name: "Kumudini Shinde", department: "Shraddha" },
      { id: "10", name: "Khushal Shinde", department: "Shraddha" },
      { id: "1", name: "Rahul Pol", department: "Mahima" },
      { id: "2", name: "Parul Pol", department: "Mahima" },
      { id: "3", name: "Maitri Pol", department: "Mahima" },
      { id: "4", name: "Kaveesh Pol", department: "Mahima" },
      { id: "5", name: "Champak Pol", department: "Venus" },
      { id: "6", name: "Sarika Pol", department: "Venus" },
      { id: "7", name: "Aditi Pol", department: "Venus" },
      { id: "8", name: "Chandrika Pol", department: "Shraddha" },
      { id: "9", name: "Kumudini Shinde", department: "Shraddha" },
      { id: "10", name: "Khushal Shinde", department: "Shraddha" }
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
