import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../authentification.service';
import { Router } from '@angular/router';
import ddpClient from '../app.authMeteorDDP';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public authService: AuthentificationService) { }

  ngOnInit() {
    ddpClient.createDDPObject();
    ddpClient.connect();
  }

  public submit(user) {
    console.log(user);
    this.authService.login(user['username'], user['password'], isLogged => {
      console.log(isLogged);
      if (isLogged) {
        this.router.navigate([ '/private' ]);
      }
    });
  }
}
