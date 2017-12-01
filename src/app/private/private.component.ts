import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';

export class State {
  constructor(public name: string, public firstName: string, public job: string,
              public picture: string) {
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
  showResults: Boolean = false;
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
      firstName: 'Julien',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
      job: 'CTO'
    },
    {
      name: 'Caminale',
      firstName: 'Loic',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
      job: 'HR'
    },
    {
      name: 'Nabhan',
      firstName: 'Stéphane',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
      job: 'CEO'
    },
    {
      name: 'Ollier',
      firstName: 'Thomas',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
      job: 'HR'
    }
  ];

  constructor() {
    this.nameInputCtrl = new FormControl();
    this.selectCtrl = new FormControl();
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
    const returnValue = data.filter(state =>
      (state.name + ' ' + state.firstName).toLowerCase().indexOf(dataEnter.toLowerCase()) === 0 ||
      (state.firstName + ' ' + state.name).toLowerCase().indexOf(dataEnter.toLowerCase()) === 0);
    console.log(returnValue);
    this.filteredUser = returnValue;
    return (returnValue);
  }

  onClickSearch() {
    let Result = [];
    if (this.selectedJob !== undefined) {
      Result = this.states.filter(worker => worker.job === this.selectCtrl.value.split('-')[0].toUpperCase());
    }else {
      Result = this.states;
    }
    if (this.nameInputCtrl.value.length !== 0) {
      Result = this.filteringDataByName(this.nameInputCtrl.value, Result);
    }
    this.coworkerListFiltering = Result;
    console.log('ONCLICKSEARCH ' + JSON.stringify(Result, null, 2));
  }

}
