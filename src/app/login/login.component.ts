import { HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';
import { AppUser, AppUserAuth } from '../model/auth.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'ak-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: AppUser = new AppUser();
  jwtHelper = new JwtHelperService();
  userObject: AppUserAuth = new AppUserAuth;
  ngUnsubscribe: Subject<void> = new Subject<void>();
  apiToken: string='';
  loginForm!: FormGroup;
  loading: boolean = false;
  errorMsg: string = '';
  isValidLicense: boolean = true;
  pass: any;
  hide: boolean = false;
  isDefaultUser: boolean = false;
  userDefaultForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    newEmail: new FormControl(''),
    confirmEmail: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  isAuthorized: any;
  constructor(
    private router: Router,
    // private toastr: ToastrService,
    private authService:AuthenticationService) {

  }
  ngOnInit(): void {
    this.pass = 'password';
    this.loginForm = new FormGroup({
      username: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(4),
        Validators.email,
        //Validators.pattern('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
      ]),
      password: new FormControl(this.user.password, [
        Validators.required
      ])
    });
  }
  showHide() {
    if (this.pass === 'password') {
      this.pass = 'text';
      this.hide= true;
    } else {
      this.pass = 'password';
      this.hide = false;
    }
  }

  login() {
    this.errorMsg = '';
    this.loading = true;
    console.log(this.user);
    this.authService.login(this.user).subscribe((resp: HttpResponse<any>) => {
      console.log(resp.headers.get('authorization'));
      var result = String(resp.headers.get('authorization'));
       this.apiToken = result.replace('Bearer ','');
       this.isAuthorized = this.jwtHelper.decodeToken(this.apiToken);
      console.log(this.apiToken);
      if (this.isAuthorized) {
          localStorage.setItem('bearerToken',
          this.apiToken);
          window.location.href =  'testBuddy';
      } else {
        this.router.navigateByUrl('auth/login');
        window.location.reload();
        this.errorMsg = "Please Provide Valid email and password";
        // this.toastr.error(this.errorMsg);
        this.loading = false;
      }
    },
      (    error: any) => {
      this.errorMsg = "Please Provide Valid email and password";
      //this.toastr.error(this.errorMsg);
      this.loading = false;
    });
  }


}
