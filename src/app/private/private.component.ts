import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import ddpClient from '../app.authMeteorDDP';
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
    ddpClient.checkConnexion()
      .then((result) => {
        ddpObject = result;
      });
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
    ddpObject.call(
      'getDataAutoComplete',             // name of Meteor Method being called
      [dataEnter],            // parameters to send to Meteor Method
      function (err, result) {   // callback which returns the method call results
        if (!err && result) {
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
          this.coworkerListFiltering = result;
        }
      }.bind(this), () => {});
  }

}

