import { Component, OnInit } from '@angular/core';
import {Project} from "../models/project.model";
import {User} from "../models/user.model";
import {ProjectService} from "../services/project.service";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-user-projects',
  templateUrl: './add-user-projects.component.html',
  styleUrls: ['./add-user-projects.component.css']
})
export class AddUserProjectsComponent implements OnInit {


  projects?: Project[];
  currentProject: Project = {};
  currentIndexProject = -1;
  nameProject = '';
  users?: User[];
  currentUsers: User = {};
  currentIndexUser = -1;
  nameUser = '';
  data ='';

  message = '';

  submitted = false;

  constructor(private projectService: ProjectService,
              private userService: UserService,private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    this.retrieveProjects();
    this.retrieveUsers();
    this.message = '';
    this.getProject(this.route.snapshot.params?.['id']);
  }
  getProject(id: string): void {
    this.projectService.get(id)
      .subscribe(
        data => {
          this.currentProject = data;
          console.log(data);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  retrieveProjects(): void {
    this.projectService.getAll()
      .subscribe(
        data => {
          this.projects = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
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
    this.retrieveProjects();
    this.retrieveUsers();
    this.currentProject = {};
    this.currentIndexProject = -1;
    this.currentIndexUser = -1;
  }
  setActiveProject(project: Project, index: number): void {
    this.currentProject = project;
    this.currentIndexProject = index;
  }
  setActiveUser(user: User, index: number): void {
    this.currentUsers = user;
    this.currentIndexUser = index;
  }

  save(): void {
    this.projectService.addusers(this.currentProject.id, this.currentUsers.id )
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          },
        error => {
          console.log(error);
        });
  }
}
