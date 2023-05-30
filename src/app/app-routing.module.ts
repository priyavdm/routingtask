import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChilddetailsComponent } from './childdetails/childdetails.component';
import { ParentdetailsComponent } from './parentdetails/parentdetails.component';

const routes: Routes = [
  //get all datas
  {path:'parent', component:ParentComponent},
  {path:'child', component:ChildComponent},
  //get particular id
  {path:'parent/:id', component:ParentdetailsComponent},
  {path:'child/:id', component:ChilddetailsComponent},
  //this is mandatory field
  {path:'**', component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
