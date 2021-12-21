import { Injectable } from '@angular/core';
  import {EventEmitter} from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {


public subject = new Subject<any>();

 private data: any[]=[];
 private messageSource = new  BehaviorSubject(this.data);


 currentMessage = this.messageSource.asObservable();

 changeMessage(message: any[]) {
  this.messageSource.next(message)
  }

  constructor() { }
}
