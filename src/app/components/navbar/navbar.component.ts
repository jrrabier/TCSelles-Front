import { Component, OnInit, AfterContentInit, Input, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /* User sent by the login-component via router-outlet */
  @Input() user: User;

  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) {}

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.flashMessages.show('Vous êtes déconnecté !', {cssClass: 'alert-warning', timeout: 3000});

    this.router.navigate(['login']);
    return false;
  }
}
