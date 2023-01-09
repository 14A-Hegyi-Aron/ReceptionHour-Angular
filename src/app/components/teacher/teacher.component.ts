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
    editedTeacher: null as TeacherModel | null,
  };

  constructor(private teacherService: TeacherService) {
    this.status.editedTeacher = null;
  }
  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe({
      next: (model: TeacherModel[]) => {
        this.teachers = model;
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
    this.status.newTeacher = null;
  }

  saveNew(): void {
    if (this.status.newTeacher?.name && this.status.newTeacher.room && this.status.newTeacher.capacity) {
      this.teacherService.newTeacher(this.status.newTeacher).subscribe({
        next: (model: TeacherModel) => {
          this.status.newTeacher = null;
          this.teachers.unshift(model);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  modify(model: TeacherModel): void {
    this.status.editedTeacher = JSON.parse(JSON.stringify(model));
  }

  cancelModify(): void {
    this.status.editedTeacher = null;
  }

  saveModify(): void {
    if (this.status.editedTeacher?.name && this.status.editedTeacher.room && this.status.editedTeacher.capacity) {
      this.teacherService.modifyTeacher(this.status.editedTeacher).subscribe({
        next: (model: TeacherModel) => {
          this.status.editedTeacher = null;
          this.teachers = this.teachers.map((m) => (m.id === model.id ? model : m));
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  delete(model: TeacherModel): void {
    if (confirm(`Bizti?\nTanár: ${model.name}`) == true){
      this.teacherService.deleteTeacher(model).subscribe({
        next: () => {
          const index = this.teachers.indexOf(model);
          this.teachers.slice(index, 1);
        },
        error(err) {
            console.log(err);
        },
      })
    }
  }
}
