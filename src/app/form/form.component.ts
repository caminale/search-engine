import { Component, EventEmitter, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  templateUrl: './form.component.html',
  selector: 'app-form', // Name of the HTML element
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input('title') submitTitle;
  @Output() onSubmit = new EventEmitter<object>();

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild('confirm') confirm: ElementRef;

  public isRegister = false;

  constructor() {}

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
    }
    console.log(payload);
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
