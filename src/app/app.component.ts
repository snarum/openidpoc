import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpenIdTest';
  constructor(private authService: AuthService) {
  }
  logoff() {
    console.log(
      'logging off'
    );
    this.authService.logoff();
  }
}
