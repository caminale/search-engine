import DDPClient from 'ddp-client';
let ddpclient = null;
import BlueBirdPromise from 'bluebird';
import { environment } from '../environments/environment';

export class AuthMeteorDDP {
  static createDDPObject = () => {
    ddpclient = new DDPClient({
      // All properties optional, defaults shown
      host : environment.serverUrl,
      port : environment.port,
      ssl  : false,
      autoReconnect : true,
      autoReconnectTimer : 500,
      maintainCollections : true,
      ddpVersion : '1',  // ['1', 'pre2', 'pre1'] available
      // Use a full url instead of a set of `host`, `port` and `ssl`
      socketConstructor: WebSocket // Another constructor to create new WebSockets
    });
  }

  static checkConnexion = () => {
    return new BlueBirdPromise((resolve, reject) => {
      if (ddpclient == null) {
        AuthMeteorDDP.createDDPObject();
        AuthMeteorDDP.connect()
          .then(() => {
            resolve(ddpclient);
            console.log('SUCCESS promise check connexion : ' + ddpclient);
          })
          .catch((err) => {
            console.log('ERROR catch promise check connexion: ' + err);
            reject(err);
          })
          .finally(() => {
            console.log('FINALLY check connexion promise');
          });
      } else {
        resolve(ddpclient);
      }
    });
  }

  static disconnect = () => {
    if (ddpclient != null) {
      ddpclient.close();
      ddpclient = null;
    }
    return ddpclient;
  }

  static getDDPObject = () => {
    return ddpclient;
  }
  static connect = () => {
    return new BlueBirdPromise((resolve, reject) => {
      ddpclient.connect(function (error, wasReconnect) {
        // If autoReconnect is true, this callback will be invoked each time
        // a server connection is re-established
        if (error) {
          console.log('DDP connection error!');
          reject()
          return;
        }

        if (wasReconnect) {
          console.log('Reestablishment of a connection.');
          resolve();
        }

        console.log('connected!');
        resolve();
        ddpclient.on('message', function (msg) {
          console.log('ddp message: ' + msg);
        });

        ddpclient.on('socket-close', function (code, message) {
          console.log('Close: %s %s', code, message);
        });

        ddpclient.on('socket-error', function (error) {
          console.log('Error: %j', error);
        });
      });
    });
  }

  static closeConnection() {
    ddpclient.close();
  }


  /*
   * If you need to do something specific on close or errors.
   * You can also disable autoReconnect and
   * call ddpclient.connect() when you are ready to re-connect.
  */

}
export default AuthMeteorDDP ;
