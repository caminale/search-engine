import { Component, EventEmitter, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  templateUrl: './form.component.html',
  selector: 'app-form', // Name of the HTML element
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  jobControler: FormControl;
  selectedJob: string;
  jobs = [
    {value: 'cto-0', viewValue: 'CTO'},
    {value: 'ceo-1', viewValue: 'CEO'},
    {value: 'hr-2', viewValue: 'HR'}
  ];
  @Input('title') submitTitle;
  @Output() onSubmit = new EventEmitter<object>();
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild('confirm') confirm: ElementRef;
  @ViewChild('number') number: ElementRef;
  @ViewChild('firstName') firstName: ElementRef;
  @ViewChild('lastName') lastName: ElementRef;
  @ViewChild('pictureLink') pictureLink: ElementRef;

  public isRegister = false;

  constructor() {
    this.jobControler = new FormControl();
  }

  ngOnInit() {
    if (this.submitTitle === 'Register') {
      this.isRegister = true;
    }
  }

  public submit() {
    const payload = {};
    payload['username'] = this.username.nativeElement.value;
    payload['password'] = this.password.nativeElement.value;
    if (this.isRegister) {
      payload['confirmPassword'] = this.confirm.nativeElement.value;
      payload['number'] = this.number.nativeElement.value;
      payload['job'] =  this.jobControler.value;
      payload['lastName'] = this.lastName.nativeElement.value;
      payload['firstName'] =  this.firstName.nativeElement.value;
      payload['pictureLink'] =  this.pictureLink.nativeElement.value;
    }
    this.onSubmit.emit(payload);
  }

  public reset() {
    this.password.nativeElement.value = '';
    this.username.nativeElement.value = '';
    if (this.isRegister) {
      this.confirm.nativeElement.value = '';
    }
  }
}
