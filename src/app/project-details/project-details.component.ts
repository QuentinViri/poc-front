import { Component, OnInit } from '@angular/core';
import {Project} from "../models/project.model";
import {ProjectService} from "../services/project.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  currentProject: Project = {
    name: '',
    description: ''
  };
  message = '';
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.message = '';
    this.getProject(this.route.snapshot.params?.['id']);
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
  updateProject(): void {
    this.message = '';
    this.projectService.update(this.currentProject.id, this.currentProject)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This project was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
  deleteProject(): void {
    this.projectService.delete(this.currentProject.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/projects']);
        },
        error => {
          console.log(error);
        });
  }

}
