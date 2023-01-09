import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {
  AppComponent,
  HomeComponent,
  TeacherComponent
 } from './components';
import { NewMeetingComponent } from './components/new-meeting/new-meeting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherComponent,
    NewMeetingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
