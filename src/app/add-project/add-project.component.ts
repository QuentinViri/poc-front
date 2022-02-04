import { Component, OnInit } from '@angular/core';
import {Project} from "../models/project.model";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project: Project = {
    name: '',
    description: ''
  };
  submitted = false;
  constructor(private projectService: ProjectService) { }
  ngOnInit(): void {
  }
  saveProject(): void {
    const data = {
      name: this.project.name,
      description: this.project.description
    };
    this.projectService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newProject(): void {
    this.submitted = false;
    this.project = {
      name: '',
      description: ''
    };
  }

}
