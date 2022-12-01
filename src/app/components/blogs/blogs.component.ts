import { AfterViewInit, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {BreakpointObserver} from  '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { DataService } from 'src/app/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit{
 
  constructor( private observer:BreakpointObserver,private router:Router,private ActivatedRoute:ActivatedRoute,public apiService:DataService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.apiService.gotoblogs(localStorage.getItem('token')).subscribe(res => {
        if(res && res['status']=='ok'){
          console.log("u can see blogs")
        }
        else{
          console.log("something went wrong in blog page")
        }
      }, (err: any) => {
        if(err) {
          console.log("we got an error")
        }
      })
    }
  }
  openHomePage(){
    this.router.navigate(['home']);
  }
  
  OnLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userdetails');
    this.router.navigate(['/home']);
    this._snackBar.open('logged out', 'Undo', {
      duration: 3000
    });
  }

}


