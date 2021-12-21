import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  @Input() list: any[]=[];


  

  constructor() { }
  
  ngOnInit(): void {

    this.list.forEach(element => {
      element.showAll=false;
      console.log( element.showAll);
  });
 
  }



  triggerReadMore(list:any){
   list.showAll = true;
}
triggerReadLess(list:any) {
  list.showAll = false;
}

}
