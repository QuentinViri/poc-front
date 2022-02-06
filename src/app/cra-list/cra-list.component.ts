import { Component, OnInit } from '@angular/core';
import {Project} from "../models/project.model";
import {Worktime} from "../models/worktime.model";
import {Dateproject} from "../models/dateproject.model";
import {User} from "../models/user.model";
import {TokenStorageService} from "../services/token-storage.service";
import {ProjectService} from "../services/project.service";
import {UserService} from "../services/user.service";
import {WorktimeService} from "../services/worktime.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-cra-list',
  templateUrl: './cra-list.component.html',
  styleUrls: ['./cra-list.component.css']
})
export class CraListComponent implements OnInit {

  currentUser: any;
  currentUserId: any;
  projects?: Project[];
  currentProject: Project = {};
  projectWorktime?: Worktime[];
  workTime: Worktime = {
    date: new Date(),
    duration: 0
  }
  dateChoose: Dateproject = {
    day:0,
    month:0,
    year:0
  }
  currentIndex = -1;
  user: User = {
    username: '',
    roles: [{id:'', name:''}],
  };
  submitted = false;
  constructor(private token: TokenStorageService,
              private projectService: ProjectService,
              private  userService: UserService,
              private worktimeService: WorktimeService,
              private modalService: NgbModal,
              private datePipe: DatePipe) { }

  closeResult = '';

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.currentUserId = this.currentUser.id;
    this.userService.get(this.currentUserId).subscribe(
      data => {
        this.user = data;
        this.projects = this.user.projects;
        // console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  setActiveProject(project: Project, index: number): void {
    this.currentProject = project;
    this.currentIndex = index;
    this.worktimeService.getWorktime(this.currentUserId, this.currentProject.id).subscribe(
      data => {
        this.projectWorktime = data;
        console.log(this.projectWorktime)
      },
      error => {
        console.log(error);
      });
  }

  addWorktime(): void {
    this.workTime.date = new Date(this.dateChoose.year, this.dateChoose.month, this.dateChoose.day)
    const data = {
      date: this.datePipe.transform(this.workTime.date,"yyyy-MM-dd"),
      duration: this.workTime.duration,
    };

    this.worktimeService.postWorktime(this.currentUserId, this.currentProject.id, data).subscribe(
      response => {
        console.log(data)
      },
      error => {
        console.log(data)
        console.log(error);
      });
    window.location.reload()
  }

}
