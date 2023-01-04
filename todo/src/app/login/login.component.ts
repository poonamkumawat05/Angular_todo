import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username='poonam';
  password='12345';

  handleLogin(){
    console.log(this.username);
  }
}
