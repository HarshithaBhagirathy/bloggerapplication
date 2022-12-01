import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  UserRegistrationForm = new FormGroup({
    username:new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.email, Validators.required]),
    password : new FormControl('',[Validators.required]),
  })

  constructor(private router:Router,private ActivatedRoute:ActivatedRoute,public apiservice:DataService,private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
  }

  OnSubmit(){
   if(this.UserRegistrationForm.valid ){
     console.log(this.UserRegistrationForm.value)
     this.apiservice.registerUser(this.UserRegistrationForm.value).subscribe((res) => {
      // if(res && res['statusCode'] === 200 && res['data']['_id']){
      if(res && res['statusCode'] === 200){
        this.router.navigate(['/login']);
        this._snackBar.open('Registration Successfull', 'Undo', {
          duration: 3000
        });
      }
      else if(res['statusCode']===303){
        this._snackBar.open('User exists already', 'Undo', {
          duration: 3000
        });
      }
    }, (err)=> {
      if(err){
        console.log('we got an error in signup')
      }
    })
   }
  }
}
