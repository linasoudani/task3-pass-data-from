import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

 list: any[]=[];

  

 constructor(private activatedRoute: ActivatedRoute){

  // Get the query string value from our route
  const myArray = this.activatedRoute.snapshot.queryParamMap.get('myArray');

  // If the value is null, create a new array and store it
  // Else parse the JSON string we sent into an array

    this.list = JSON.parse(myArray || '{}');
   
   console.log(this.list)
}
  
  ngOnInit(): void {

    this.list.forEach(element => {
      element.showAll=false;
      console.log( element.showAll);
  });

 // this.list= JSON.parse(localStorage.getItem('myLSkey') || '{}');
  }
  triggerReadMore(list:any){
   list.showAll = true;
}
triggerReadLess(list:any) {
  list.showAll = false;
}
}
