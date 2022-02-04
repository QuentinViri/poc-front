import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../models/project.model";

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
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  addusers(idProject: any, data:any): Observable<any> {
    return this.http.post(`${baseUrl}/${idProject}/users`,data);
  }

  update(id: any, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`,data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByName(title: any): Observable<Project[]> {
    return this.http.get<Project[]>(`${baseUrl}?name=${name}`);
  }

}
