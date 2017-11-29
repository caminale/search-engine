import { Injectable } from '@angular/core';

@Injectable()
export class AuthentificationService {
  private userList: any[];
  private isAuth: boolean;
  public currentUser: object;

  constructor() {
    this.userList = [];
    this.isAuth = false;
    this.currentUser = {};
  }

  isAuthenticated() {
    return this.isAuth;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  login(username, password, callback) {
    let found = true;
    for (const user in this.userList) {
      if (this.userList[user].username === username) {
        if (this.userList[user].password === password) {
          this.isAuth = true;
          this.currentUser = this.userList[user];
          callback(true);
          console.log(this.currentUser);
          found = false;
        }
      }
    }
    if (found) {
      callback(false);
    }
  }

  register(username, password, confirmPassword) {
    if (password === confirmPassword) {
      this.userList.push({username, password});
      console.log('Register !');
    }
  }

}
