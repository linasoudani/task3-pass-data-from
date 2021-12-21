import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
 
import { Pipe, PipeTransform } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './task5/sibling1/sibling1.component';
import { Sibling2Component } from './task5/sibling2/sibling2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 50, showAll = false, ellipsis = '...') {
    if(showAll){
      return value;
    }
    
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }
}
@NgModule({
  declarations: [
    AppComponent,
    AddDetailsComponent,
    ViewDetailsComponent,
    TruncatePipe,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    Child1Component,
    Child2Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
