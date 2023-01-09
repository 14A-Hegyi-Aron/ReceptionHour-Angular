import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeacherModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient) {}

  getAllTeachers(): Observable<TeacherModel[]> {
    return this.http.get<TeacherModel[]>(`${environment.APIUrl}/model`);
  }

  newTeacher(model: TeacherModel): Observable<TeacherModel> {
    return this.http.put<TeacherModel>(`${environment.APIUrl}/model`, model);
  }

  modifyTeacher(model: TeacherModel): Observable<TeacherModel> {
    return this.http.post<TeacherModel>(`${environment.APIUrl}/model`, model);
  }

  deleteTeacher(model: TeacherModel): Observable<any> {
    var options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: model,
    };
    return this.http.delete<any>(`${environment.APIUrl}/teacher`, options);
  }
}
