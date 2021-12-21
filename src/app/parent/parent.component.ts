import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

 list: any[]=[];

  constructor() { }
  
  ngOnInit(): void {

    this.list.forEach(element => {
      element.showAll=false;
      console.log( element.showAll);
  });
 
  }


parentFunction(lili :any[]){
 this.list=lili
 console.warn( lili);

}
  triggerReadMore(list:any){
   list.showAll = true;
}
triggerReadLess(list:any) {
  list.showAll = false;
}

}
