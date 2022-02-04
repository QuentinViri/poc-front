import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Project} from "../models/project.model";
import {User} from "../models/user.model";
const baseUrl = 'http://localhost:8080/api/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }
  get(id: any): Observable<User> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
