import { Component, ɵɵNgOnChangesFeature, OnChanges, OnInit } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: User

  ngOnInit(){}

  onActivate($event) {
    $event.user = this.user;
  }

  onDeactivate($event) {
    this.user = $event.user;
  }
}
