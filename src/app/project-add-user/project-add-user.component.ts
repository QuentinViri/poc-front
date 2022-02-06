import { Component, OnInit } from '@angular/core';
import {Project} from "../models/project.model";
import {ProjectService} from "../services/project.service";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-add-user',
  templateUrl: './project-add-user.component.html',
  styleUrls: ['./project-add-user.component.css']
})
export class ProjectAddUserComponent implements OnInit {

  users?: User[];
  user:User = {};
  currentUser: User = {};
  currentProject: Project = {};
  currentIndex = -1;
  name = '';
  submitted=false;

  constructor(
    private userService: UserService,
    private projectService : ProjectService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.retrieveUsers();
    this.getProject(this.route.snapshot.params?.['id']);

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

  saveUser(): void {
    const data = {
      ids:[this.currentUser.id],

    };


    this.projectService.addUser(this.currentProject.id, data)
      .subscribe(
        response => {
          // console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  getProject(id: string): void {
    this.projectService.get(id)
      .subscribe(
        data => {
          this.currentProject = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
