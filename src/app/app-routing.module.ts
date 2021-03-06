import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent } from './add-details/add-details.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ParentComponent } from './parent/parent.component';
import { Sibling1Component } from './task5/sibling1/sibling1.component';
import { Sibling2Component } from './task5/sibling2/sibling2.component';

const routes: Routes = [

 
    { path: 'sibling1', component: Sibling1Component },
    { path: 'sibling2', component: Sibling2Component },
    { path: 'child1', component: Child1Component },
    { path: 'child2', component: Child2Component },
    { path: 'add-details', component: AddDetailsComponent },
    { path: 'parent', component: ParentComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
