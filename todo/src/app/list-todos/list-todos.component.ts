import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';


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
export class ListTodosComponent  implements OnInit{

  todos: Todo[]
    //   todos=[
    //   new Todo(1,'Hello',false,new Date()),
    //   new Todo(2,'Hey',false,new Date()),
    //   new Todo(3,'How are you',false,new Date()),
    //   // {id:"1",description:""},
    //   // {
    //   //   id:"2",
    //   //   description:""
    //   // },
    //   // {
    //   //   id:"3",
    //   //   description:""
    //   // },
    // ]
    = [];
   
    message: any;
   
constructor(
  private todoService:TodoDataService
){

}

ngOnInit(){
  this.todoService.retriveAllTodos('poonam').subscribe(
    response=>{
      this.todos=response;
    }
  )
  
}
deleteTodo(id: any){
  console.log(`delete todo ${id}`)
  this.todoService.deleteTodo('poonam',id).subscribe(
    response=>{
      console.log(response);
      this.message=`Delete Successfull ${id}`
    }
  )
}

}
