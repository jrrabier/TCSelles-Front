import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalConstants } from "src/app/common/global-constants";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /* Default avatar */
  imgSrc: string;

  registerForm: FormGroup;

  constructor(
    private validateService: ValidateService,
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private GLOBAL: GlobalConstants,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.imgSrc = this.GLOBAL.DEFAULT_AVATAR;
    this.createForm();
  }

  onRegisterSubmit() {
    console.log(this.registerForm.value);

    // Required fields
    if (!this.validateService.validateRegister(this.registerForm.value)) {
      this.flashMessages.show('Veuillez renseigner tous les champs obligatoires !', {cssClass: 'alert-danger', timeout: 2000});
      return false;
    }

    // Validate email
    if(!this.validateService.ValidateEmail(this.registerForm.value.email)) {
      this.flashMessages.show('Veuillez renseigner un email valide !', {cssClass: 'alert-danger', timeout: 2000});
      return false;
    }

    // Register user
    this.authService.registerUser(this.registerForm.value)
    .subscribe(data => {
      if (data.success) {
        this.flashMessages.show('Votre compte est bien crée !', {cssClass: 'alert-success', timeout: 2000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessages.show('Une erreur est survenue !', {cssClass: 'alert-danger', timeout: 2000});
        this.router.navigate(['/register']);
      }
    });

  }

  createForm() {
    this.registerForm = this.fb.group({
      last_name: ['', Validators.required],
      first_name: ['', Validators.required],
      avatar: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      rank: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        postal_code: [''],
        city: [''],
      }),
      birth_date: ['', Validators.required],
      mobile: [''],
      sex: ['', Validators.required]
    });
  }

}
