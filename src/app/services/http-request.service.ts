import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { }

  get<T>(apiEndpoint: string): Observable<T> {
    return this.http.get<T>(environment.api + apiEndpoint);
  }

  getWithParams<T>(apiEndpoint: string, paramsObj: any): Observable<T> {
    return this.http.get<T>(environment.api + apiEndpoint, { params: paramsObj });
  }

  post<T>(apiEndpoint: string, paramsObj: any): Observable<T> {
    return this.http.post<T>(environment.api + apiEndpoint, paramsObj);
  }
}
