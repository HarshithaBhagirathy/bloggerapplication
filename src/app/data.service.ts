import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {login} from './models/interfaces';
@Injectable({
  providedIn: 'root',
})

export class DataService {

  constructor(private hobj: HttpClient) {}


  login(userData: login): Observable<any> {
    return this.hobj.post<login>(environment.blogurl+'login', userData)
  }
  
  registerUser(userData:any): Observable<any> {
    return this.hobj.post(environment.blogurl+'register', userData)
  }
  
  gotoblogs(token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
  });
      return this.hobj.get(environment.blogurl+'blogs', {
      headers: headers,
    });
  }
}
