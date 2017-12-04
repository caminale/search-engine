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

  public ddpObject = null;
  constructor(public router: Router, public authService: AuthentificationService) { }

  ngOnInit() {
    ddpClient.checkConnexion()
      .then((result) => {
        this.ddpObject = result;
      });
  }

  public submit(user) {
      this.ddpObject.call('login', [
        {user: {username: user['username']}, password: user['password']}
      ], function (err, result) {
        if (!err) {
          this.router.navigate([ '/private' ]);
        }else {
          console.log(err);
        }
      }.bind(this));
  }
}
