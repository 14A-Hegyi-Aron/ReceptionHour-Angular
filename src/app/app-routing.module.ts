import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, NewMeetingComponent, TeacherComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'newmeeting',
    component: NewMeetingComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: 'teachers',
        component: TeacherComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
