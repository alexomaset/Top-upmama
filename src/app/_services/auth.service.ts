import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})

  export class AuthService {
   
  // private userSubject: BehaviorSubject<User>;
  // public user: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    // this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    // this.user = this.userSubject.asObservable();
  }

  // public get userValue(): User {
  //   return this.userSubject.value;
  // }


  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/login`, { email, password })
    .pipe(
      map(({token}) => {
        let user: User = {
          email: email,
          token: token,
        };
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      })
    );
}
  
  register(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/register`, {email, password});
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}