import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatStepperModule} from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrivateComponent } from './private/private.component';
import { RomanizePipe } from './romanize.pipe';
import { AuthentificationService } from './authentification.service';
import { DisplayDataComponent } from './display-data/display-data.component';


const appRoutes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'private', component: PrivateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    RegisterComponent,
    PrivateComponent,
    RomanizePipe,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatStepperModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
