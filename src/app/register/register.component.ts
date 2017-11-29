import { Component, OnInit } from '@angular/core';
import { AuthentificationService} from '../authentification.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthentificationService) { }

  ngOnInit() {
  }

  submit(user) {
    console.log(user);
    this.authService.register(user['username'], user['password'], user['confirmPassword']);
  }

}
