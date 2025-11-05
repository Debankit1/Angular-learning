import { Component } from '@angular/core';
@Component({
selector:"hello-app",
standalone:true,
templateUrl:"./hello.component.html",
styleUrls: ['./hello.component.css']
})
export class HelloComponent{
    
  message: string = "Hello from HelloComponent!";
  count: number = 0;
  increment() {
    
    this.count++;
  }
  decrement(){
    if(this.count<=0){
        this.count=0;
        return;
    }
    this.count--;
  }
   getMessage() {
    return "This is returned from a method!";
  }

}