import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {MenuComponent} from "./menu/menu.component";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {ProjectComponent} from "./project/project.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'user', component: UserComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
