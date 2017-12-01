import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {isNullOrUndefined} from "util";
import {isUndefined} from "util";

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
  stateCtrl: FormControl;
  selectCtrl: FormControl;
  filteredStates: Observable<any[]>;
  isFilter : Boolean = false;
  public  coworkerListFiltering =  [];

  jobs = [
    {value: 'cto-0', viewValue: 'CTO'},
    {value: 'ceo-1', viewValue: 'CEO'},
    {value: 'hr-2', viewValue: 'HR'}
  ];
  states: State[] = [
    {
      name: 'Basson',
      firstName: 'Julien',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      picture: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
      job: 'CTO'
    },
    {
      name: 'Caminale',
      firstName: 'Loic',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      picture: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
      job : 'HR'
    },
    {
      name: 'Nabhan',
      firstName: 'Stéphane',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      picture: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
      job: 'CEO'
    },
    {
      name: 'Ollier',
      firstName: 'Thomas',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      picture: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
      job : 'HR'
    }
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.selectCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        map((state: string) => state ? this.filterStates(state) : null)
      );
    this.stateCtrl.valueChanges.subscribe(value => {
      this.isFilter = value.length === 0 ? false : true;
      console.log( this.isFilter);
    });
    this.selectCtrl.valueChanges.subscribe(value => {
      if(value)
      this.coworkerListFiltering = this.states.filter(worker => worker.job == value.split('-')[0].toUpperCase());
      this.isFilter=true;
    });
  }
  filterStates(name: string) {
    if(this.selectedJob !== undefined){
      const dataList = this.states.filter(worker => worker.job == this.selectedJob.split('-')[0].toUpperCase());
      return this.filteringData(name, dataList);
    }
    else{
      return this.filteringData(name, this.states);
    }
  }
  filteringData(dataEnter: string, data){
    this.coworkerListFiltering = data.filter(state =>
    state.name.toLowerCase().indexOf(dataEnter.toLowerCase()) === 0 ||
    state.firstName.toLowerCase().indexOf(dataEnter.toLowerCase()) === 0);
    this.isFilter = this.coworkerListFiltering.length === 0 ? false : true;
    return this.coworkerListFiltering;
  }
}
