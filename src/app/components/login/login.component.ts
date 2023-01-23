import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    login: '',
    password: '',
  };

  showErrors = false;
  errorText = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.showErrors = true;
    this.errorText = '';
    if (this.user.login && this.user.password) {
      this.authService.login(this.user.login, this.user.password).subscribe({
        next: (result: { token: string }) => {
          this.authService.token = result.token;
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.errorText = err.error.error ?? err.message;
          console.error(err.message);
        },
      });
    }
  }


}
