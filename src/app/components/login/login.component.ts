import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm} from '@angular/forms';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginUserForm:FormGroup;
  constructor(private router:Router,private _snackBar: MatSnackBar,private ActivatedRoute:ActivatedRoute,public apiService:DataService) { 
    this.LoginUserForm = new FormGroup({
      email : new FormControl('',[Validators.email, Validators.required]),
      password : new FormControl('',[Validators.required]),
    })
  }
  k:any;
  ngOnInit(): void {
  }
  OnSubmit(){
    if(this.LoginUserForm.valid){
      this.apiService.login(this.LoginUserForm.value).subscribe(res =>{
        if(res && res['statusCode'] === 400 && res['token']){
          localStorage.setItem('token', res['token'])
          localStorage.setItem('userdetails', JSON.stringify(res['user']))
          this.k= localStorage.getItem('userdetails');
          this.k = JSON.parse(this.k);
          this.router.navigate(['/blogs/',this.k._id]);
          this._snackBar.open('login Successfull', 'Undo', {
          duration: 3000
        });
        }
        else{
          alert("Invalid Credentials")
        }
      }, (err)=>{
        console.log('we got an error in signup')
      })
    }
  }
}