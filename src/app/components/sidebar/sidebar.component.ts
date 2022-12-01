import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user:string="";
  a:any;
  k!: string;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.a= localStorage.getItem('userdetails');
    this.a= JSON.parse(this.a);
    this.k=this.a._id
  }
  onBlog(){
    this.router.navigateByUrl('blogs/'+this.k+'/posts')
  }

  dispPost(){
    this.router.navigateByUrl('blogs/'+this.k+'/pages')
  }

}
