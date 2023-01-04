
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message='Some Welcome Message'
  name=''

  //ActivatedRoute 
  constructor(private route:ActivatedRoute){


  }
  ngOnInit(){
    //console.log(this.route.snapshot.params['name']);
    this.name=this.route.snapshot.params['name'];

  }

}
