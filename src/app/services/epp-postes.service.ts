import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from 'express';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Epppostes } from '../interfaces/eppPostes';

@Injectable({
  providedIn: 'root'
})
export class EppPostesService {
  
  public baseUrl: string = environment.serverUrl;
  
  constructor(private http: HttpClient, public router:Router) { }

  listarPostes(): Observable<Epppostes[]> {
    return this.http.get<Epppostes[]>(`${this.baseUrl}/eppPostes`);
  }
  
  agregarRespuestaPostes(respuestaPostes: Epppostes): Observable<any> {
    const url = `${this.baseUrl}/eppPostes/`; // Cambia esto por la ruta correcta en tu backend
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, respuestaPostes, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Error en el servicio:', error);
    return throwError('Error al realizar la solicitud. Por favor, intenta de nuevo más tarde.');
  }
}
