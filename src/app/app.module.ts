import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestimgComponent } from './testimg/testimg.component';
import { Category } from './category/category.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { ChartsModule } from 'ng2-charts';
// API Request module
import { HttpClientModule } from '@angular/common/http';
import { MatSelectdropDownComponent } from './mat-selectdrop-down/mat-selectdrop-down.component';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

import { DemoMaterialModule } from './material-module';
import { SlideToggleComponent,MatDialogDemo } from './slide-toggle/slide-toggle.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { UiDegitestbuddyComponent } from './ui-degitestbuddy/ui-degitestbuddy.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MatAccordiansComponent } from './mat-accordians/mat-accordians.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ScrollTestComponent } from './scroll-test/scroll-test.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { NewScrollTopComponent } from './new-scroll-top/new-scroll-top.component';

@NgModule({
  entryComponents: [MatSelectdropDownComponent,MatDialogDemo],
  declarations: [
    AppComponent,
    TestimgComponent,
    Category,
    UserListComponent,
    MatSelectdropDownComponent,
    SlideToggleComponent,
    MatDialogComponent,
    MatDialogDemo,
    UiDegitestbuddyComponent,
    RegistrationComponent,
    LoginComponent,
    MatAccordiansComponent,
    ScrollTestComponent,
    ScrollTopComponent,
    NewScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
