import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  constructor(private http:HttpClient) {}

  // READ con XML HTTP REQUEST
  // getPersonas():any {

  //   const request$ = new Observable((observer) => {
  //     const url = "http://localhost:3005/personas";
  //     const request = new XMLHttpRequest();
  //     request.addEventListener('load', () => {
  //       if (request.readyState === 4 && request.status === 200) {
  //         observer.next(JSON.parse(request.responseText));
  //         observer.complete();
  //       } else {
  //         observer.error('An error has occured');
  //       }
  //     });
  //     request.open('GET', url);
  //     request.send();

  //   });

  //   return request$;
  // }

  getPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>('http://localhost:3005/personas');
  }
}


