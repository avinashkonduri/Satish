import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {

  constructor(private http: HttpClient) { }

getTestStatus(id: number): Observable<any> {
    // return this.http.post(API_URL + '/',countryModel);
    return this.http.post<any>('API_URL/',+id).pipe(tap(resp => {
    }));
  }

  public getUrlInfo(): Observable<any> {
    return this.http.get('assets/files/urlData.json').pipe(
        map((res: any) => res),
        catchError(this.errorHandler));
      }
      errorHandler(error: Response) {
        return observableThrowError(error);
    }
}
