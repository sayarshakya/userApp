import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../service/user.service';

interface User {
  id?: number;
  name: string;
  age: number;
  phone: string;
  status: string;
  designation: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  //styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'phone', 'status', 'designation'];
  dataSource: MatTableDataSource<User> | undefined;

  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
      //this.dataSource.sort = this.sort;
    });
  }
}
