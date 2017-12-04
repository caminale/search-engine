import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatStepperModule, MatSelectModule} from '@angular/material';
import { MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrivateComponent } from './private/private.component';
import { RomanizePipe } from './romanize.pipe';
import { AuthentificationService } from './authentification.service';
import { DisplayDataComponent } from './display-data/display-data.component';
import { ViewDetailsComponent } from './view-details/view-details.component';


const appRoutes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'private', component: PrivateComponent},
  {path: 'details/:name', component : ViewDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    RegisterComponent,
    PrivateComponent,
    RomanizePipe,
    DisplayDataComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatCardModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AuthentificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
