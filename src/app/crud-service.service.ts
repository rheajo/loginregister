import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {Login} from './login';
import { Register } from './register';
 
@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  private apiServer = "";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'applocation/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
  getAll():Observable<Register[]>{
    return this.httpClient.get<Register[]>(this.apiServer + '/register')

  }
  

  login(login): Observable<Login>{
    return this.httpClient.post<Login>(this.apiServer + '/login' + JSON.stringify(login),this.httpOptions)
  }

  register(register):Observable<Register>{
    return this.httpClient.get<Register>(this.apiServer + '/register' + JSON.stringify(register),this.httpOptions)
  }
}