import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  //Router
  //Dependency-Injection
  constructor(private router:Router){


  }
  
  handleLogin(){
    //console.log(this.username);
    //console.log(this.password);
    if(this.username==="poonam" && this.password==='123'){
      //Redirect to welcome
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }
    else{
      this.invalidLogin=true;
    }
  }
}
