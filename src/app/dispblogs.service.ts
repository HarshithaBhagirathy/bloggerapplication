import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { allblg, blogger, postt } from './models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DispblogsService {
  token = localStorage.getItem('token');

  constructor(private dt: HttpClient) { }

  AddingBlogser(blogData:postt,id:string):Observable<blogger>{
    return this.dt.put<blogger>(environment.blogurl+'putblogs/'+id,blogData);
  }
  
  getAllDetails():Observable<allblg>{
    return this.dt.get<allblg>(environment.blogurl+'getAlldata');  
  }
  
  getUserById(id:string):Observable<any>{
  
    return this.dt.get(environment.blogurl+'user/'+id);
  }
}
