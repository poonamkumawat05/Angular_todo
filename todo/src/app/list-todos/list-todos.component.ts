import { Component } from '@angular/core';


export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos=[
  new Todo(1,'Hello',false,new Date()),
  new Todo(2,'Hey',false,new Date()),
  new Todo(3,'How are you',false,new Date()),

  // {id:"1",description:""},
  // {
  //   id:"2",
  //   description:""
  // },
  // {
  //   id:"3",
  //   description:""
  // },
  

]

}
