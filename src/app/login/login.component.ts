import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  message:string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login();
    this.message = 'login'
  }

  logout() {
    this.authService.logout();
    this.message = 'logout'

  }

  ngOnInit(): void {}
}
