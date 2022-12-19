import { HttpClient } from '@angular/common/http';
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
    return this.http.get<TeacherModel[]>(`${environment.APIUrl}/teacher`);
  }
}
