import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
})
export class PostlistComponent implements OnInit {

  
  constructor(public ps: DataService) {}

  ngOnInit(): void {
   
  }

  
 
  
}

