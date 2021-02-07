import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { User } from '../model/user';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any>{
    return this.http.get<User>('https://gorest.co.in/public-api/users');
  }

  adduser(){

  }

  public getUserlogs(): Observable<any> {
    return this.http.get('/assets/data.json').pipe(
        map((res: any) => res),
        catchError(this.errorHandler));
      }
      errorHandler(error: Response) {
        return observableThrowError(error);
    }
}
