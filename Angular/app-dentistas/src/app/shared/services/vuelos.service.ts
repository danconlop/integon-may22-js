import { Injectable } from '@angular/core';
import { Vuelos } from '../interfaces/vuelos';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {
  constructor(private http:HttpClient) { }

  private url:string = 'http://localhost:3005/vuelos';

  getVuelos():Observable<Vuelos[]>{
    return this.http.get<Vuelos[]>(this.url)
    .pipe(
      catchError((error:HttpErrorResponse) => {
        console.log(`ocurrió un error ${error}`);
        return throwError(error);
      })
    )
  }
  // getVuelos():Observable<Vuelos[]>{
  //   return this.http.get<Vuelos[]>(this.url);
  // }

  addVuelo(vuelo:Vuelos):Observable<any>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(vuelo);

    return this.http.post(this.url, body,{'headers':headers , observe: 'response'});
  }

}
