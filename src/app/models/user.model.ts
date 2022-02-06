import {ArrayType} from "@angular/compiler";
import {Role} from "./role.model";
import {Project} from "./project.model";
import {Worktime} from "./worktime.model";

export class User {
  id?: any;
  username?: string;
  email?: string;
  roles?: Array<Role>;
  projects?: Array<Project>;
  workTimes?: Array<Worktime>;
}
