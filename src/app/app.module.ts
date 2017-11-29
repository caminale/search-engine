import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrivateComponent } from './private/private.component';
import { RomanizePipe } from './romanize.pipe';
import { AuthentificationService } from './authentification.service';


const appRoutes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'private', component: PrivateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    RegisterComponent,
    PrivateComponent,
    RomanizePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
