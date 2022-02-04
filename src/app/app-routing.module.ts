import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import {BoardUserComponent} from "./board-user/board-user.component";
import {BoardManagerComponent} from "./board-manager/board-manager.component";
import {ProfileComponent} from "./profile/profile.component";
import {RegisterComponent} from "./register/register.component";
import {ProjectsListComponent} from "./projects-list/projects-list.component";
import {ProjectDetailsComponent} from "./project-details/project-details.component";
import {AddProjectComponent} from "./add-project/add-project.component";
import {AddUserProjectsComponent} from "./add-user-projects/add-user-projects.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardManagerComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'addproject', component: AddProjectComponent },
  { path: 'adduserproject', component: AddUserProjectsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
