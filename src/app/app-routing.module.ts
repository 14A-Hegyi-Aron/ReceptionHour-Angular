import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, NewMeetingComponent, TeacherComponent, LoginComponent } from './components';

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
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
