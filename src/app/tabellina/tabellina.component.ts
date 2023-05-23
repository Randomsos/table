import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServerData } from 'src/utils/intercaccie';
import { Employees } from '../employe';
import { EmployersService } from '../employers.service';

@Component({
  selector: 'app-tabellina',
  templateUrl: './tabellina.component.html',
  styleUrls: ['./tabellina.component.css']
})

export class TabellinaComponent implements OnInit {

  data: ServerData | undefined;
  dataSource = MatTableDataSource<Employees>
  displayedColumns: string[] = ['id', 'birthDate', 'firstName', 'lastName', 'gender', 'hireDate'];
  constructor(private emplyeeService: EmployersService()) {
    this.loadData("http://localhost:8080/emplyees");
    this.dataSource = new MatTableDataSource(this.data?._embedded.emplyees);

  } { }

  ngOnInit(): void {
  }


  statement: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
