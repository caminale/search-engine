import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import ddpClient from '../app.authMeteorDDP';

let MyDdpClient;
export class State {
  constructor(public name: string, public firstName: string, public job: string,
              public picture: string, public number: [string]) {
  }
}

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})

export class PrivateComponent {
  selectedJob: string;
  filteredUser: {};
  auCompletedNumList: Observable<any[]>;
  numInputCtrl: FormControl;
  nameInputCtrl: FormControl;
  selectCtrl: FormControl;
  auCompletedList: Observable<any[]>;
  coworkerListFiltering: any[];

  jobs = [
    {value: 'cto-0', viewValue: 'CTO'},
    {value: 'ceo-1', viewValue: 'CEO'},
    {value: 'hr-2', viewValue: 'HR'}
  ];
  states: State[] = [
    {
      name: 'Basson',
      number: ['06', '80', '98', '56', '25'],
      firstName: 'Julien',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
      job: 'CTO'
    },
    {
      name: 'Caminale',
      number: ['06', '75', '18', '34', '72'],
      firstName: 'Loic',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
      job: 'HR'
    },
    {
      name: 'Nabhan',
      firstName: 'Stéphane',
      number: ['06', '17', '42', '56', '85'],
      picture: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
      job: 'CEO'
    },
    {
      name: 'Ollier',
      firstName: 'Thomas',
      number: ['06', '53', '98', '85', '76'],
      picture: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
      job: 'HR'
    }
  ];

  constructor() {

    this.nameInputCtrl = new FormControl();
    this.selectCtrl = new FormControl();
    this.numInputCtrl = new FormControl();

    this.auCompletedNumList = this.numInputCtrl.valueChanges
      .pipe(
        map((state: string) => state ? this.filteringDataByNum(state, this.states) : null)
      );
    this.auCompletedList = this.nameInputCtrl.valueChanges
      .pipe(
        map((state: string) => state ? this.filteringDataByName(state, this.states) : null)
      );
    this.nameInputCtrl.valueChanges.subscribe(value => {
    });
    this.selectCtrl.valueChanges.subscribe(value => {
      if (value) {
      }
    });
  }

  filteringDataByName(dataEnter: string, data) {
    return (data.filter(state =>
      (state.name + ' ' + state.firstName).toLowerCase().indexOf(dataEnter.toLowerCase()) === 0 ||
      (state.firstName + ' ' + state.name).toLowerCase().indexOf(dataEnter.toLowerCase()) === 0));
  }

  filteringDataByNum(dataEnter: string, data) {
    return (data.filter(state =>
      ( state.number[0] + ' ' +
        state.number[1] + ' ' +
        state.number[2] + ' ' +
        state.number[3] + ' ' +
        state.number[4]).indexOf(dataEnter.toLowerCase()) === 0 ||
      ( state.number[0] +
        state.number[1] +
        state.number[2] +
        state.number[3] +
        state.number[4] ).indexOf(dataEnter.toLowerCase()) === 0));
  }

  onClickSearch() {
    let Result = [];
    if (this.selectedJob !== undefined) {
      Result = this.states.filter(worker => worker.job === this.selectCtrl.value.split('-')[0].toUpperCase());
    }else {
      Result = this.states;
    }
    if (this.nameInputCtrl.value !== null) {
      Result = this.filteringDataByName(this.nameInputCtrl.value, Result);
    }

    console.log(this.numInputCtrl.value);

    if (this.numInputCtrl.value !== null) {
      Result = this.filteringDataByNum(this.numInputCtrl.value, Result);
    }
    this.coworkerListFiltering = Result;
    console.log('ONCLICKSEARCH ' + JSON.stringify(Result, null, 2));


  }

}
