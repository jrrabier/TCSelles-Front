import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: User;

  headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
  }

  registerUser(user: User) {
    // Set headers
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post<any>(environment.url + 'users/register', user, {headers: this.headers});
  }

  authenticateUser(user: FormGroup) {
    // Set headers
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post<any>(environment.url + 'users/authenticate', user, {headers: this.headers});
  }

  getProfile() {
    this.loadToken();
    this.headers = new HttpHeaders({'Authorization': this.authToken});
    this.headers = this.headers.append('Content-Type', 'application/json');

    return this.http.get<User>(environment.url + 'users/profile', {headers: this.headers});
  }

  storeUserData(token, user) {
    sessionStorage.setItem('id_token',token);
    sessionStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = sessionStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }

  getLoggedInUser(): Observable<User> {
    return sessionStorage.getItem['user'];
  }

  logout() {
    this.authToken = null;
    this.user = null;
    sessionStorage.clear();
  }
}
