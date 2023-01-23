import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherModel } from 'src/app/models';
import { MeetingModel } from 'src/app/models/meeting.model';
import { MeetingService } from 'src/app/services/meeting.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.css'],
})
export class NewMeetingComponent implements OnInit {
  teachers: TeacherModel[] = [];
  meeting: MeetingModel = {
    id: 0,
    teacher: null,
    teacherId: null,
    date: '',
    parentName: '',
  };
  showErrors = false;

  constructor(
    private teacherService: TeacherService,
    private meetingService: MeetingService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe({
      next: (result: TeacherModel[]) => {
        this.teachers = result;
        this.teachers.sort((a, b) =>
          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        );
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  save() {
    if (
      this.meeting.teacherId &&
      this.meeting.date &&
      this.meeting.parentName
    ) {
      this.meeting.teacherId = Number(this.meeting.teacherId);
      this.showErrors = false;
      this.meetingService.newMeeting(this.meeting).subscribe({
        next: () => {
          alert("Sikeres jelentkezés!");
          this.router.navigate(['']);
        },
        error: (err) => {
          console.error(err);
        },
      })
    } else {
      this.showErrors = true;
    }
  }
}
