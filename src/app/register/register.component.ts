import { Component, OnInit } from '@angular/core';
import { AuthentificationService} from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthentificationService, public router: Router) { }

  ngOnInit() {
  }

  submit(user) {
    console.log(user);
    this.authService.register(user['username'], user['password'], user['confirmPassword']);
    this.router.navigate([ '/private' ]);
  }

}
