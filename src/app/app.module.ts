import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ValidateService } from "./services/validate.service";
import { FlashMessagesModule, FlashMessagesService } from "angular2-flash-messages";
import { HttpClientModule } from "@angular/common/http";
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { GlobalConstants } from './common/global-constants';
import { CompulsoryComponent } from './shared/compulsory/compulsory.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordGuard } from './guards/reset-password.guard';

export function tokenGetter() {
  return sessionStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    CompulsoryComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [
    ValidateService,
    FlashMessagesService,
    JwtHelperService,
    AuthGuard,
    ResetPasswordGuard,
    GlobalConstants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
