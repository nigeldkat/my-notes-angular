import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email!: string;
  
  constructor(
    public authService: AuthService,
    private router: Router
  ) { }
  ngOnInit() {
  }

  forgotPassword() {
    return this.authService.ForgotPassword(this.email)
    .then(() => this.router.navigate(['/sign-in']))
  }
}