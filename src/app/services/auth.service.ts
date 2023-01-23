import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  token = '';

  login(loginName: string, password: string): Observable<{ token: string }> {
    const formData = new FormData();
    formData.append('loginName', loginName);
    formData.append('password', password);
    return this.http.post<{ token: string }>(
      `{environment.APIUrl}/login}`,
      formData
    );
  }

  logout(): void {
    this.token = '';
  }
}
