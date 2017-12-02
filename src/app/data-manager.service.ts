import { Injectable } from '@angular/core';

@Injectable()
export class DataManagerService {
  private coWorkerList: any[];

  constructor() {
    this.coWorkerList = [
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
        job : 'HR'
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
        job : 'HR'
      }
    ];
  }

  getById(id) {
    // return this.coWorkerList.find()
  }

  getAll() {
    return this.coWorkerList;

  }
}
