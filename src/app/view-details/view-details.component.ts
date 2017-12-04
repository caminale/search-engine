import { ActivatedRoute, Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { getUserProfileData } from '../data-manager.service';
import ddpClient from '../app.authMeteorDDP';
import BlueBirdPromise from 'bluebird';
let ddpObject;

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})

export class ViewDetailsComponent implements OnInit {
  public user = '';
  public email: string;
  public isUserDefined = false;
  constructor( private activatedRoute: ActivatedRoute, public router: Router ) {
    ddpClient.checkConnexion()
      .then((result) => {
        ddpObject = result;
        getUserProfileData(this.activatedRoute.snapshot.queryParams['userId'])
          .then((userResult) => {
            this.user = userResult;
            this.email = userResult.profile.firstName + '.' + userResult.profile.lastName + '@esme.fr';
            this.isUserDefined = true;
            console.log('SUCCESS promise : ' + userResult);
          })
          .catch((err) => {
            console.log('ERROR catch promise : ' + err);
          })
          .finally(() => {
            console.log('FINALLY promise');
          });
      })
      .catch((err) => {
        console.log('ERROR catch promise check connexion: ' + err);
      })
      .finally(() => {
        console.log('FINALLY check connexion promise');
      });
  }

  ngOnInit() {
  }

  onClickBack() {
    this.router.navigate([ '/private' ]);
  }
}
