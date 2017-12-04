import { ActivatedRoute, Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  public user;
  public email: string;
  constructor( private activatedRoute: ActivatedRoute, public dataService: DataManagerService, public router: Router ) {
    this.user = this.dataService.getUser();
    this.email = this.user.profile.firstName + '.' + this.user.profile.lastName + '@esme.fr';
  }

  ngOnInit() {
    // const userId = this.activatedRoute.snapshot.queryParams["userId"];
    // console.log(userId);
  }

  onClickBack() {
    this.router.navigate([ '/private' ]);
  }
}
