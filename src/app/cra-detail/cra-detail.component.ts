import { Component, OnInit } from '@angular/core';
import {Project} from "../models/project.model";
import {ProjectService} from "../services/project.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Worktime} from "../models/worktime.model";
import {WorktimeService} from "../services/worktime.service";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {Dateproject} from "../models/dateproject.model";
import {DatePipe} from "@angular/common";
import {TokenStorageService} from "../services/token-storage.service";

@Component({
  selector: 'app-cra-detail',
  templateUrl: './cra-detail.component.html',
  styleUrls: ['./cra-detail.component.css']
})
export class CraDetailComponent implements OnInit {

  currentWorktime: Worktime = {
    date: new Date(),
    duration: 0
  }
  currentProject: Project = {};
  projects?: Project[];
  currentUser: any;
  currentUserId: any;
  currentIndex = -1;
  user: User = {};
  message = '';
  submitted = false;

  constructor(
    private worktimeService : WorktimeService,
    private projectService: ProjectService,
    private userService: UserService,
    private tokenService : TokenStorageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getProject(this.route.snapshot.params?.['id']);
    this.currentUser = this.tokenService.getUser();
    this.currentUserId = this.currentUser.id;
    this.userService.get(this.currentUserId).subscribe(
      data => {
        this.user = data;
        // console.log(data);
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

  addWorktime(): void {
    this.message = '';
    const data = {
      date: this.currentWorktime.date,
      duration: this.currentWorktime.duration
    };
    console.log(this.currentWorktime.date);
    console.log(this.currentWorktime.duration);

    this.worktimeService.postWorktime(this.currentUser.id, this.currentProject.id, data)
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
