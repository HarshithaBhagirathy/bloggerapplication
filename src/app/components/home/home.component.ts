import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { DispblogsService } from 'src/app/dispblogs.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  alldata:any;
  
  constructor(public ps: DataService,public dt:DispblogsService,private router:Router) { }
  ngOnInit(): void {
   this.onget();
  }
  
  onget(){
    this.dt.getAllDetails().subscribe((data)=>{
      this.alldata =  data;
      })
  }
          
  fullcontent(id:String,userId:string){
    localStorage.setItem('contentUser',userId);
    this.router.navigate(['allblogs',id]);
  }
  
}
