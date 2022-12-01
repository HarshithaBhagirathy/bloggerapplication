import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { DispblogsService } from 'src/app/dispblogs.service';

import { NgForm } from '@angular/forms';
import { allblg, postblg } from 'src/app/models/interfaces';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  posts: postblg[]= [];
  editSig = 0;
  c!:string;
  blogId:Number=0;
  b!: string;
  adata!: allblg;
  a:any;
  searchText:string='';
  constructor(public ps: DataService,public dt:DispblogsService) { }

  ngOnInit(): void {
    this.a=localStorage.getItem('userdetails')
    this.a=JSON.parse(this.a)
    this.b=this.a._id;
    this.dt.getUserById(this.b).subscribe((data)=>{
      this.adata=data
       this.posts=data.blogs
      })
  }

      
 deletePost(title:String){
    this.dt.getUserById(this.b).subscribe((data)=>{
      let user = data;
      user.blogs = user.blogs.filter((blog: any) => blog.title !== title);
      this.dt.AddingBlogser(user, user._id).subscribe((res: any) => console.log(res));
      location.reload();
    })
  }

  editPost(id:Number){
    this.editSig=1;
    this.blogId=id;
  }

  onPostlistData(form:NgForm,id:String){
    if(!form.invalid){
    let post = {
      title:form.value.title,
      content:form.value.content,
      dateTime: form.value.dateTime,
      image:form.value.image
    };
    this.onEdit(post,id)
    this.editSig=0;
    }
    else{
      return
    }
  }

  OnClosePost(){
    this.editSig=0;
  }

  onEdit(post:Object,k:String){
    this.dt.getUserById(this.b).subscribe((data)=>{
      let user = data;
      user.blogs = this.adata.blogs;
      this.dt.AddingBlogser(user, user._id).subscribe((res: any) => console.log(res));
    })  
  }
}
