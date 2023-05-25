import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { loginDetails } from '../interface/login';
import { map } from 'rxjs/operators';
import { StudentModel } from '../interface/student-model';

@Injectable({
  providedIn: 'root',
})
export class StudentRegService {
  private userSubject: BehaviorSubject<loginDetails | null>;
  public user: Observable<loginDetails | null>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(sessionStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }

  getStudents(): Observable<StudentModel> {
    return this.http.get<StudentModel>(`${environment.baseUrl}/students`);
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
      .post<loginDetails>(`${environment.baseUrl}/auth/login`, 
        adminDetails,
      )
      .pipe(
        map((user) => {
          sessionStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }
}
