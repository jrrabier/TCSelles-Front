import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  queryParams$: Subscription;
  forgotPasswordForm: FormGroup;
  token: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    this.queryParams$ = this.route.queryParams.subscribe((params) => {
      this.token = params.token;

    });
    this.createForm();
  }

  ngOnDestroy() {
    this.queryParams$.unsubscribe();
  }

  createForm() {
    this.forgotPasswordForm = this.fb.group({
      new_password: ['', Validators.required],
      confirm_new_password: ['', Validators.required]
    });
  }

  onFormSubmit() {
    this.authService.resetPassword(this.forgotPasswordForm.value, this.token).subscribe((result) => {
      if (result.success) {
        this.flashMessages.show(result.msg, {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessages.show(result.msg, {cssClass: 'alert-danger', timeout: 5000});
      }

    },
    () => {
      this.flashMessages.show(`Votre lien a expiré`, {cssClass: 'alert-danger', timeout: 5000});
    });
  }

}
