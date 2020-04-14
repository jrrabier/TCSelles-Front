import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user$: Subscription;

  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) {}

  ngOnInit() {
    this.user$ = this.authService.getLoggedInUser()
    .subscribe();

    console.log(this.user$);

  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessages.show('Vous êtes déconnecté !', {cssClass: 'alert-warning', timeout: 3000});

    this.router.navigate(['login']);
    return false;
  }
}
