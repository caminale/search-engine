import { Component, OnInit, Input} from '@angular/core';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  @Input('arrayDataFiltered') coWorker;
  constructor( public dataService: DataManagerService ) {
  }
  ngOnInit() {
  }
  handleClick(user) {
    this.dataService.setUser(user);
  }
}





