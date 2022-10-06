import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NetworkLibService {

  private BASE_URL = "https://novaepay.herokuapp.com/v1/"

  constructor(private readonly http: HttpClient) { }

  post<T, R>(path: string, body: T): Observable<R> {
    const url = this.BASE_URL + path;
    return this.http.post<R>(url, body)
  }

  put<T, R>(path: string, body: T): Observable<R> {
    const url = this.BASE_URL + path;
    return this.http.put<R>(url, body)
  }

  get<R>(path: string): Observable<R> {
    const url = this.BASE_URL + path;
    return this.http.get<R>(url)
  }

  
}
