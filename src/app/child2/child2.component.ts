import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private userService: SharedService) { 


   
  }

  ngOnInit(): void {
    this.list.forEach(element => {
      element.showAll=false;
      console.log( element.showAll);
  });
  
  this.userService.currentMessage.subscribe(message => (this.list= message));
  }

 list: any[]=[];


  triggerReadMore(list:any){
   list.showAll = true;
}
triggerReadLess(list:any) {
  list.showAll = false;
}

}
