import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeacherModel } from '../models';
import { MeetingModel } from '../models/meeting.model';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  constructor(private http: HttpClient) {}

  getAllMeetings(): Observable<MeetingModel[]> {
    return this.http.get<MeetingModel[]>(`${environment.APIUrl}/model`);
  }

  newMeeting(model: MeetingModel): Observable<MeetingModel> {
    return this.http.put<MeetingModel>(`${environment.APIUrl}/model`, model);
  }

  modifyMeeting(model: MeetingModel): Observable<MeetingModel> {
    return this.http.post<MeetingModel>(`${environment.APIUrl}/model`, model);
  }

  deleteMeeting(model: MeetingModel): Observable<any> {
    var options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: model,
    };
    return this.http.delete<any>(`${environment.APIUrl}/Meeting`, options);
  }
}
