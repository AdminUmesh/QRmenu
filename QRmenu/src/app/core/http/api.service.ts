import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}


// @Injectable is a decorator in Angular that marks a class as available for Dependency Injection (DI).
// It tells Angular’s dependency injection system that this class can have dependencies injected into it and can itself be injected into other classes