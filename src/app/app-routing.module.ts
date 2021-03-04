import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Category } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { MatAccordiansComponent } from './mat-accordians/mat-accordians.component';
import { MatSelectdropDownComponent } from './mat-selectdrop-down/mat-selectdrop-down.component';
import { RegistrationComponent } from './registration/registration.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { TestimgComponent } from './testimg/testimg.component';
import { UiDegitestbuddyComponent } from './ui-degitestbuddy/ui-degitestbuddy.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {path:'testBuddy',component:UiDegitestbuddyComponent},
  {path:'',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'testing',component:TestimgComponent},
  {path:'accordians',component:MatAccordiansComponent},
  //{path:'', redirectTo:'/category',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
