import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';
import { BasicAuthenticationService } from '../service/basicauthentication.service';
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
  constructor(private router:Router,
    private hardcodeAuthenticationService:HardcodeAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService){
    


  }
  
  handleLogin(){
    //console.log(this.username);
    //console.log(this.password);
    //if(this.username==="poonam" && this.password==='123'){
    if(this.basicAuthenticationService.authenticate(this.username,this.password))  {
    //Redirect to welcome
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }
    else{
      this.invalidLogin=true;
    }
  }

  handleBaicAuthLogin(){
    //console.log(this.username);
    //console.log(this.password);
    //if(this.username==="poonam" && this.password==='123'){
    if(this.basicAuthenticationService.authenticate(this.username,this.password))  {
    //Redirect to welcome
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }
    else{
      this.invalidLogin=true;
    }
  }
}
