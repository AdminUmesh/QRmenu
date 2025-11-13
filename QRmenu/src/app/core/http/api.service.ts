import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.example.com'; // Your API base URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/data`);
  }

  postData(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/submit`, payload);
  }

  // // simple POST
  // post<T>(
  //   path: string,
  //   body: any,
  //   options?: { headers?: HttpHeaders }
  // ): Observable<T> {
  //   return this.http.post<T>(`${this.baseUrl}${path}`, body, options);
  // }

  // // other helpers if you need
  // get<T>(path: string, options?: any): Observable<T> {
  //   return this.http.get<T>(`${this.baseUrl}${path}`, options);
  // }

  // // put, delete, etc. as needed...
}

// @Injectable is a decorator in Angular that marks a class as available for Dependency Injection (DI).
// It tells Angular’s dependency injection system that this class can have dependencies injected into it and can itself be injected into other classes
