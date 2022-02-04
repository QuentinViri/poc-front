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

  currentUser: any;
  users?: User[];
  currentUsers: User = {};
  currentIndex = -1;
  name = '';
  constructor(private token: TokenStorageService, private userService: UserService) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
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
}
