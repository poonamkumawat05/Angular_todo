import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

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
    let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader();
    let headers=new HttpHeaders(
      {
        Authorization:basicAuthHeaderString
      }
    )
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloBean/path-variable/${name}`,
    {headers});
    
  }
  createBasicAuthenticationHttpHeader(){
    let username='user'
    let password='password'
    let basicAuthHeaderString='Basic ' + Window.bind(username + ':' +password);
    return basicAuthHeaderString;

  }

}
