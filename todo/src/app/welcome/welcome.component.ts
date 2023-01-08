import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message'
  welcomeMessageFromService:any
  name = ''

  //ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}
  ngOnInit() {
    //console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }
  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response.message),
      error =>this.handleErrorResponse(error)
    );
    console.log('last line of get Welcome msg');
      
    //console.log('getWeclomemessage');
  }

  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServicePathVariable(this.name).subscribe(
      response=>this.handleSuccessfulResponse(response.message),
      error =>this.handleErrorResponse(error)
    );
    console.log('last line of get Welcome msg');
      
    //console.log('getWeclomemessage');
  }
  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService=response.message
    //console.log(response);
    //console.log(response.message);

  }
  handleErrorResponse(error: any){
    this.welcomeMessageFromService=error.error.message;

  }
}
