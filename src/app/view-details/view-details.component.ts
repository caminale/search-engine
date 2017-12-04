import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, Component} from '@angular/core';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  picture: string;
  name: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  sector: string;
  constructor(private activatedRoute: ActivatedRoute, public router: Router) {
    this.picture = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    this.name = 'Basson';
    this.firstName = 'Julien';
    this.email = 'julien.basson@free.fr';
    this.phoneNumber = '0673621862';
    this.sector = 'departement1';
  }

  ngOnInit() {
    const param1 = this.activatedRoute.snapshot.queryParams["userId"];
    console.log(param1);
  }

  onClickBack() {
    this.router.navigate([ '/private' ]);
  }
}
