import { Injectable } from '@angular/core';
import { Envoie } from '../model/envoie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnvoieService {
  private apiURL = "http://localhost:8088/";

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })

  }
  constructor(private httpClient: HttpClient) {
   
   }

  listeEnvoies(): Observable<Envoie[]> {
    return this.httpClient.get<Envoie[]>(this.apiURL + '/envoie/api/liste')
    .pipe(
      catchError(this.errorHandler)
    )
   
  }

  faireEnvoie(envoie:Envoie): Observable<Envoie> {

    return this.httpClient.post<Envoie>(this.apiURL + '/envoie/api/add', JSON.stringify(envoie), this.httpOptions)

    .pipe(

      catchError(this.errorHandler)

    )

  }  

  find(id:any): Observable<Envoie> {

    return this.httpClient.get<Envoie>(this.apiURL + '/envoies/' + id)

    .pipe(

      catchError(this.errorHandler)

    )

  }

   

  update(id:any, envoie:Envoie): Observable<Envoie> {

    return this.httpClient.put<Envoie>(this.apiURL + '/envoies/' + id, JSON.stringify(envoie), this.httpOptions)

    .pipe(

      catchError(this.errorHandler)

    )

  }

   

  delete(id:any){

    return this.httpClient.delete<Envoie>(this.apiURL + '/envoies/' + id, this.httpOptions)

    .pipe(

      catchError(this.errorHandler)

    )

  }

    
  errorHandler(error:any) {

    let errorMessage = '';

    if(error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;

    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    return throwError(errorMessage);

 }

}

