import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { DispblogsService } from 'src/app/dispblogs.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { postt } from 'src/app/models/interfaces';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
a:any;
b!: string;
c:any;
// blogarr:any;
constructor(private ps:DataService,public dt:DispblogsService,private _snackBar: MatSnackBar) { }
 ngOnInit(): void {
    this.a=localStorage.getItem('userdetails')
    this.a=JSON.parse(this.a)
    this.b=this.a._id;
  }
  onPostData(form:NgForm){
    if(!form.invalid){
    const post = {
      title:form.value.title,
      content:form.value.content,
      dateTime: Date.now(),
      image:form.value.image
    };
    this.dt.getUserById(this.b).subscribe((data)=>{
    this.c=data.blogs;
    this.c.push(post);
    data.blogs=this.c;
    this.onNewPost(data)
    });
     form.resetForm();
    }
    else{
      return
    }
  }
  
  onNewPost(k:postt){
    this.dt.AddingBlogser(k,this.b).subscribe(data=>console.log(data));
    this._snackBar.open('View updated post on pages', 'Undo', {
      duration: 3000
    });
  }

}
