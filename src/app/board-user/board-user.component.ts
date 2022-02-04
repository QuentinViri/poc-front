import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../services/token-storage.service";
import {Project} from "../models/project.model";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  currentUser: any;
  projects?: Project[];
  currentProject: Project = {};
  currentIndex = -1;
  name = '';
  constructor(private token: TokenStorageService, private projectService: ProjectService) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.retrieveProjects();
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
}
