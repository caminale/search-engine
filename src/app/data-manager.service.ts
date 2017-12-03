import { Injectable } from '@angular/core';
import ddpClient from './app.authMeteorDDP';
let ddpObject;

@Injectable()
export class DataManagerService {
  public userProfileData: object;
  constructor() {
    ddpObject = ddpClient.checkConnexion();
    this.userProfileData = {};
  }
  getUser() {
    return this.userProfileData;
  }
  setUser(user) {
    this.userProfileData = user;
  }
  // async getUserProfileData(userId) {
  //   try {
  //     await ddpObject.call(
  //       'getUserById',             // name of Meteor Method being called
  //       [userId],            // parameters to send to Meteor Method
  //       function (err, result) {   // callback which returns the method call results
  //         if (!err && result) {
  //           console.log('succesful user by userID : ' + JSON.stringify(result.profile, null, 2));
  //           this.userProfileData = result;
  //         }
  //       }.bind(this), () => {
  //       });
  //     console.log('yolo' + JSON.stringify(this.userProfileData));
  //     return this.userProfileData;
  //   }catch (e) {
  //     console.log(e);
  //   }
  // }
}
