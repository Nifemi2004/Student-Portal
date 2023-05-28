import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { loginDetails } from '../interface/login';
import { map } from 'rxjs/operators';
import { StudentModel } from '../interface/student-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StudentRegService {
  private userSubject: BehaviorSubject<loginDetails | null>;
  public user: Observable<loginDetails | null>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(sessionStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  getStudents(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/student`);
  }

  createUser(newUser: loginDetails): Observable<loginDetails> {
    return this.http.post<loginDetails>(
      `${environment.baseUrl}/auth/register`,
      newUser
    );
  }

  login(adminDetails: loginDetails) {
    console.log(adminDetails, 30000);
    return this.http
      .post<loginDetails>(`${environment.baseUrl}/auth/login`, adminDetails)
      .pipe(
        map((user) => {
          console.log(user.accessToken, 'breadstew');
          sessionStorage.setItem('accessToken', user.accessToken),
            sessionStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('accessToken');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}
