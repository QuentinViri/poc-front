import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../model/project.model";

const baseUrl = 'http://localhost:8080/api/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(baseUrl);
  }
  get(id: any): Observable<Project> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
