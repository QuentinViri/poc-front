import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {authInterceptorProviders } from "./helpers/auth.interceptor";
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { AddUserProjectsComponent } from './add-user-projects/add-user-projects.component';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    BoardAdminComponent,
    BoardManagerComponent,
    BoardUserComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    AddProjectComponent,
    ProjectDetailsComponent,
    ProjectsListComponent,
    AddUserProjectsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbDropdownModule
    ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
