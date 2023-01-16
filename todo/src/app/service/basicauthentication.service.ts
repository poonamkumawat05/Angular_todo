import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }
  authenticate(username: any,password: any){
    if(username==="poonam" && password==='123'){
      sessionStorage.setItem('authenticaterUser',username)
    return true;
    }
    return false;
  }

  executeAuthenticationService(username: any,password: any){

    let basicAuthHeaderString='Basic ' + Window.bind(username + ':' +password);
    
    let headers=new HttpHeaders(
      {
        Authorization:basicAuthHeaderString
      }
    )
    return this.http.get<AuthenticationBean>(`http://localhost:8081/basicauth`,
    {headers});
    
  }
 

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticaterUser')
    return !(user===null)
  }
  logout(){
    sessionStorage.removeItem('authenticaterUser')

  }

}
export class AuthenticationBean{
  constructor(public message:string){}
}

