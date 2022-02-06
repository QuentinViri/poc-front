import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {Project} from "../models/project.model";
import {TokenStorageService} from "../services/token-storage.service";
import {ProjectService} from "../services/project.service";
import {User} from "../models/user.model";
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  name = '';

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUsers(): void {
    this.userService.deleteAll()
      .subscribe(
        response => {
          // console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.currentUser = {};
    this.currentIndex = -1;
    this.userService.findByName(this.name)
      .subscribe(
        data => {
          this.users = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}

