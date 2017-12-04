import { Component, OnInit } from '@angular/core';
import { AuthentificationService} from '../authentification.service';
import { Router } from '@angular/router';
import ddpClient from '../app.authMeteorDDP';
let ddpObject;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  constructor(public authService: AuthentificationService, public router: Router) {}

  ngOnInit() {
    ddpClient.checkConnexion()
      .then((result) => {
        ddpObject = result;
      });
  }

  submit(user) {

    ddpObject.call(
      'createNewUser',             // name of Meteor Method being called
      [user],            // parameters to send to Meteor Method
      function (err, result) {   // callback which returns the method call results
        if (!err) {
        }
      },
      function () {              // callback which fires when server has finished
        console.log('updated');  // sending any updated documents as a result of
      }
    );
    this.authService.register(user['username'], user['password'], user['confirmPassword']);
    this.router.navigate([ '/private' ]);
  }

}
