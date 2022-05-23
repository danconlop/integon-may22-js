import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // Constructor
  constructor(private http:HttpClient) {}

  private url:string = 'http://localhost:3005/users';

  // Método Add User
  addUser(user:User):Observable<any>{
    const headers = { 'content-type':'application/json' }
    const body = JSON.stringify(user);

    return this.http.post(this.url, body, {'headers':headers, observe: 'response'});
  }

  // Método lectura de un usuario
  getOneUserData(email:string):Observable<any>{
    return this.http.get<any>(`${this.url}/${email}`)
      .pipe(
        catchError((error:HttpErrorResponse) => {
          console.log(`ocurrió un error ${error}`);
          return throwError(error);
        })
      )
  }
}
