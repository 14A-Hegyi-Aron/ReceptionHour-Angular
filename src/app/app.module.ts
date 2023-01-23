import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {
  AppComponent,
  HomeComponent,
  TeacherComponent,
  NewMeetingComponent,
  LoginComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherComponent,
    NewMeetingComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
