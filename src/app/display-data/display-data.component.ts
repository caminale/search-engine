import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  @Input('arrayData') coWorker;
  @Input('arrayDataFiltered') coWorkerFiltered;
  @Input('isFilter') isFilter;

  constructor() {
  }

  ngOnInit() {
    console.log(this.isFilter);
  }

}
