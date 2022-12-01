import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { DispblogsService } from 'src/app/dispblogs.service';
import { onlyblg } from 'src/app/models/interfaces';


@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
  styleUrls: ['./allblogs.component.css']
})
export class AllblogsComponent implements OnInit {
  id = '';
  content = "";
  title!: string;
  image:String | undefined;
  author!: String;
  filterBlog:onlyblg[]=[];
  blogArr:onlyblg[] = [];
  userId:any;
  constructor( private route: ActivatedRoute,private ps:DataService,public dt:DispblogsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userId = localStorage.getItem('contentUser');
    this.dt.getUserById(this.userId).subscribe(data =>{
      console.log(data);
      this.author = data.username;
        this.blogArr = data.blogs;
        console.log(this.blogArr);
         this.blogArr.filter((val)=>{
          if(val._id == this.id){
        this.filterBlog.push(val)}})
        this.title = this.filterBlog[0].title;
        this.image = this.filterBlog[0].image;
        this.content = this.filterBlog[0].content;
    })
    
  }

}
