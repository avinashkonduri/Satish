import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
// import { AppUser, AppUserAuth } from '../Model/auth.model';

import { environment } from '../../environments/environment';
import { AppUser, AppUserAuth } from '../model/auth.model';

const API_URL = environment.apiUrl;
// Account Managemnet Api URL
// const API_URL = 'studyapp/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'observe': 'response' as 'body'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  forgotPassword(value: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public userObject: AppUserAuth = new AppUserAuth();
  // jwtHelper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  // login(entity: AppUser): Observable<any> {
  //   // Initialize security object

  //   return this.http.post<any>(API_URL + '/login',
  //     entity,{observe: 'response', withCredentials: true})
  //     .pipe(map(user => {
  //       console.log(user);
  //       return user;
  //     }));
  // }

  login(entity: AppUser): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(`${API_URL}/login`,entity, {observe: 'response'});
  }
  // logout(): Observable<any> {
  //   this.resetuserObject();
  //   localStorage.clear();
  //   return this.http.get<any>('http://18.224.79.72:8081/studyapp/logout').pipe(tap(resp => {
  //     window.location.href =  API_URL+ 'auth/login';
  //     window.location.reload();
  //   }));
  // }

  resetuserObject(): void {
    this.userObject.email = '';
    this.userObject.bearerToken = '';
    this.userObject.isAuthenticated = false;
    localStorage.removeItem('bearerToken');
  }

  isTokenExpired(): boolean {
    if (localStorage.bearerToken) {
      // return this.jwtHelper.isTokenExpired(localStorage.bearerToken);
    }
    return false;
  }
}
