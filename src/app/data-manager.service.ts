import { Injectable } from '@angular/core';
import BlueBirdPromise from 'bluebird';
import ddpClient from './app.authMeteorDDP';
let ddpObject;


export const getUserProfileData = function(userId) {
  return new BlueBirdPromise((resolve, reject) => {
    ddpClient.checkConnexion()
      .then((result) => {
        ddpObject = result;
        ddpObject.call(
          'getUserById',             // name of Meteor Method being called
          [userId],            // parameters to send to Meteor Method
          function (err, userResult) {   // callback which returns the method call results
            if (!err && userResult) {
              console.log('succesful user by userID : ' + JSON.stringify(userResult.profile, null, 2));
              resolve(userResult);
            } else {
              reject(err);
            }
          }, () => {
          });
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {
        console.log('FINALLY promise');
      });
  });
};

