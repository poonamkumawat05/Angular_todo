import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username='poonam';
  password='12345';
  errorMessage='Invalid Credentials';
  invalidLogin=false
  
  handleLogin(){
    //console.log(this.username);
    //console.log(this.password);
    if(this.username==="poonam" && this.password==='12345'){
      this.invalidLogin=false
    }
    else{
      this.invalidLogin=true;
    }
  }
}
