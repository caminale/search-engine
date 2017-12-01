import { Component, OnInit } from '@angular/core';

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
  constructor() {
    this.picture = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    this.name = 'Basson';
    this.firstName = 'Julien';
    this.email = 'julien.basson@free.fr';
    this.phoneNumber = '0673621862';
    this.sector = 'departement1';
  }

  ngOnInit() {
  }

}
