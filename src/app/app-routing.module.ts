import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChilddetailsComponent } from './childdetails/childdetails.component';
import { ParentdetailsComponent } from './parentdetails/parentdetails.component';

const routes: Routes = [
  {path:'parent', component:ParentComponent},
  {path:'child', component:ChildComponent},
  {path:'parent/:id', component:ParentdetailsComponent},
  {path:'child/:id', component:ChilddetailsComponent},
  {path:'**', component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
