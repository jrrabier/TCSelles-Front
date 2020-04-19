import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { emailValidator } from 'src/app/shared/email.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  user: User;

  isForgotPassword: boolean= false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessages: FlashMessagesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createLoginForm();
    this.createForgotPasswordForm();
    this.flashMessages.grayOut(true);
  }

  onLoginSubmit() {

    this.authService.authenticateUser(this.loginForm.value)
    .subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessages.show('Vous êtes connecté. Bienvenue !', {cssClass: 'alert-success', timeout: 2000});
          this.router.navigate(['/home']);
      } else {
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 2000});
        this.router.navigate(['/login']);
      }
    });
  }

  onForgotPasswordSubmit() {
    console.log(this.forgotPasswordForm.value);

    // this.authService.forgotPassword(this.forgotPasswordForm.value)
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, emailValidator()]],
      password: [null, Validators.required]
    });
  }

  createForgotPasswordForm() {
    this.forgotPasswordForm = this.fb.group({
      email: [null, [Validators.required, emailValidator()]],
    });
  }
}
