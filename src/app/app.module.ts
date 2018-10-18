import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
