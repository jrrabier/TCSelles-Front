import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  isRequesting: boolean = false;
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  /* User sent to the navbar via router-outlet */
  user: User;

  isForgotPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessages: FlashMessagesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createLoginForm();
    this.createForgotPasswordForm();
  }

  onLoginSubmit() {

    this.authService.authenticateUser(this.loginForm.value)
    .subscribe(res => {
      if (res.success) {
        this.authService.storeUserData(res.token, res.user);
        this.user = res.user;
        this.flashMessages.show('Vous êtes connecté. Bienvenue !', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/home']);
      } else {
        this.flashMessages.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/login']);
      }
    });
  }

  onForgotPasswordSubmit() {

    this.isRequesting = true;

    this.authService.forgotPassword(this.forgotPasswordForm.value)
    .subscribe(res => {
      if (res.success) {
        this.flashMessages.show(res.msg, {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/login']);
        this.isRequesting = false;
      } else {
        this.flashMessages.show(res.msg, {cssClass: 'alert-danger', timeout: 5000});
        this.isRequesting = false;
        return false;
      }
    });
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
