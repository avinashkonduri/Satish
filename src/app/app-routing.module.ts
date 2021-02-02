import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Category } from './category/category.component';
import { TestimgComponent } from './testimg/testimg.component';

const routes: Routes = [
  {path:'category',component:Category},
  {path:'testing',component:TestimgComponent},
  {path:'', redirectTo:'/category',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
