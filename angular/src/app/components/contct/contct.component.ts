import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../services/api.service';

import { Book } from './../../interfaces/book.interface';

@Component({
  selector: 'app-contct',
  templateUrl: './contct.component.html',
  styleUrls: ['./contct.component.css']
})
export class ContctComponent implements OnInit {
  title = 'api';
  apiService: ApiService;
  next: boolean = false;

  name: string = "";
  date: any;
  email: string = "";


  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  ngOnInit() {
  }

  adddCalendar() {
    this.next = true;
    const p: Book = {

      name: this.name,
      date: this.date,
      email: this.email,
      
    };
    this.apiService.addCalendar(p).subscribe(post => {
      console.log(post);
      // this.apiService.getPeople();
      // this.apiService.runGetPeople();
      
    });
  }

  nextpost():void{
    this.next = false;
    this.name = '';
    this.date = null;
    this.email = '';

  }
  

}
