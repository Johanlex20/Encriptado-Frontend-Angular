import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Mensaje } from './mensaje';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private urlEndPoint:string = "http://localhost:8080/api/mensajes"; 
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  encriptar(mensaje:Mensaje):Observable<Mensaje>{
    return this.http.post<Mensaje>(this.urlEndPoint, mensaje,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        console.error(e.error.mensaje)
        Swal.fire('Debe ingresar mensaje ', '','error');
        return throwError(e);
      })
    );
  }

  desencriptar(mensaje:Mensaje[]):Observable<Mensaje[]>{
    const urlDesencriptar = `${this.urlEndPoint}/desencriptar`;
    return this.http.post<Mensaje[]>(urlDesencriptar,mensaje, {headers:this.httpHeaders}).pipe(
      catchError(e=>{
        console.error(e.error.mensaje)
        Swal.fire("Debe ingresar mensaje",'', 'error');
        return throwError(e);
      })
    );
  }
}
