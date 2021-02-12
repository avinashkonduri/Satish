import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Category } from './category/category.component';
import { MatSelectdropDownComponent } from './mat-selectdrop-down/mat-selectdrop-down.component';
import { TestimgComponent } from './testimg/testimg.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {path:'',component:MatSelectdropDownComponent},
  {path:'category',component:Category},
  {path:'testing',component:TestimgComponent},
  //{path:'', redirectTo:'/category',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
