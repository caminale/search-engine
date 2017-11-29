import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../authentification.service';


@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  public username;
  constructor(public authSerivce: AuthentificationService) {
    console.log(this.authSerivce.getCurrentUser());
    this.username = (this.authSerivce.getCurrentUser())['username'];
  }

  ngOnInit() {
  }

}
