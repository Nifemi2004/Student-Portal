import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentRegService {
  constructor(private http: HttpClient, private router: Router) {}

  getUsers(): Observable<any> {
    return this.http.get(environment.baseUrl + '/users');
  }
}
