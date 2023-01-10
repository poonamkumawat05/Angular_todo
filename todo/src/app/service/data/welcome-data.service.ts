import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>("http://localhost:8080/helloBean");
    
  }
  
  executeHelloWorldServicePathVariable(name: any){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloBean/path-variable/${name}`);
    
  }
  createBasicAuthenticationHttpHeader(){
    let username='user'
    let password='password'
    let basicAuthHeaderString='Basic' + username +password;

  }

}
