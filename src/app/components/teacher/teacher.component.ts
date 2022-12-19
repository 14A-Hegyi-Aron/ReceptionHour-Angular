import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { TeacherModel } from '../../models';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  teachers: TeacherModel[] = [];
  status = {
    newTeacher: null as TeacherModel | null,
    editedTeacher: null as number | null,
  }

  constructor(private teacherService: TeacherService) {
    this.status.editedTeacher = 1;
  }
  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe({
      next: (result: TeacherModel[]) => {
        this.teachers = result;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  newTeacher(): void {
    this.status.newTeacher = {
      id: 0,
      name: '',
      room: '',
      capacity: 10,
    };
  }

  cancelNew(): void {
    this.status.newTeacher = null,
  }
}
