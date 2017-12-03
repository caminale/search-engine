import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router} from '@angular/router';
import {DataManagerService} from '../data-manager.service';


import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {map} from 'rxjs/operators/map';
import ddpClient from '../app.authMeteorDDP';
import {forEach} from "@angular/router/src/utils/collection";
let ddpObject;

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})

export class PrivateComponent {
  selectedJob: string;
  auCompletedNumList: Observable<any[]>;
  numInputCtrl: FormControl;
  nameInputCtrl: FormControl;
  selectCtrl: FormControl;
  auCompletedList: Observable <any[]>;
  coworkerListFiltering = [];
  jobs = [
    {value: 'cto-0', viewValue: 'CTO'},
    {value: 'ceo-1', viewValue: 'CEO'},
    {value: 'hr-2', viewValue: 'HR'},
    {value: 'all-3', viewValue: 'ALL'},

  ];
  constructor() {
    ddpObject = ddpClient.checkConnexion();
    this.nameInputCtrl = new FormControl();
    this.selectCtrl = new FormControl();
    this.numInputCtrl = new FormControl();
    this.numInputCtrl.valueChanges.subscribe(value => {
      if (value.length !== 0) {
        this.filteringDataByNum(value);
      }else {
        this.auCompletedNumList = null;
      }
    });

    this.nameInputCtrl.valueChanges.subscribe(value => {
      if (value.length !== 0) {
        this.filteringDataByName(value);
      }else {
        this.auCompletedList = null;
      }
    });
    this.selectCtrl.valueChanges.subscribe(value => {
      if (value) {
      }
    });
  }


  filteringDataByName(dataEnter: string) {
    console.log('Filtering by Name..');

    ddpObject.call(
      'getDataAutoComplete',             // name of Meteor Method being called
      [dataEnter],            // parameters to send to Meteor Method
      function (err, result) {   // callback which returns the method call results
        if (!err && result) {
          console.log('succesful getDataAutoComplete : ' + JSON.stringify(result, null, 2));
          this.auCompletedList = result;
        }
      }.bind(this), () => {});
  }

  filteringDataByNum(dataEnter: string) {
    dataEnter = dataEnter.replace(/\s/g, '');

    ddpObject.call(
      'getNumDataAutoComplete',             // name of Meteor Method being called
      [dataEnter],            // parameters to send to Meteor Method
      function (err, result) {   // callback which returns the method call results
        if (!err && result) {
          console.log('succesful getNumDataAutoComplete : ' + JSON.stringify(result, null, 2));
          this.auCompletedNumList = result;
        }
      }.bind(this), () => {});
  }

  onClickSearch() {
    let sendedResearch = {};
    if (this.numInputCtrl.value !== null) {
      sendedResearch = Object.assign(sendedResearch, {num: this.numInputCtrl.value.replace(/\s/g, '')});
    }
    if (this.nameInputCtrl.value !== null) {
      sendedResearch = Object.assign(sendedResearch, {name: this.nameInputCtrl.value});
    }
    if (this.selectCtrl.value !== null) {
      sendedResearch = Object.assign(sendedResearch, {job: this.selectCtrl.value});
    }
    ddpObject.call(
      'getResults',             // name of Meteor Method being called
      [sendedResearch],            // parameters to send to Meteor Method
      function (err, result) {   // callback which returns the method call results
        if (!err && result) {
          console.log('succesful getResult : ' + JSON.stringify(result, null, 2));
          this.coworkerListFiltering = result;
        }
      }.bind(this), () => {});
  }

}

