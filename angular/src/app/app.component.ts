import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ApiService} from './services/api.service';

import { People } from './interfaces/people.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';
  boxes = [1, 2, 3, 4, 5, 6];
  liczba: number;
  pkt:number = 0;
  car: string = '';
  model: string = '';
  next: boolean = false;
  who: number = 0;
  updatepkt: number = 0;
  data: People;
  httpClient: HttpClient;
  apiService: ApiService;

  constructor(httpClient: HttpClient, apiService: ApiService){

    this.apiService = apiService;
    this.httpClient = httpClient;

    
  }

  onScroll(e) {
      if(this.boxes.length>=this.apiService.liczba) {
        console.log('No more items');
        return;
      }
      console.log('scrolled!!', e);
      const moreBoxes = [1, 2];
      this.boxes = [...this.boxes, ...moreBoxes];
    }




  adddPost() {
  this.next = true;
  const p: People = {
    car: this.car,
    model: this.model,
    pkt: this.pkt,
    


  };
  this.apiService.addPost(p).subscribe(post => {
    console.log(post);
    this.apiService.getPeople();
    this.apiService.runGetPeople();
    
  });
}



  nextpost():void{
    this.next = false;
    this.car = '';
    this.model = '';
  }
  ngOnInit() {

  }


  changePostt(who:number, pkt:number) { 
    
    this.who = who;
    
    this.updatepkt = pkt;
    this.updatepkt++;
    console.log("=="+this.updatepkt)
    const p: People = {

      pkt: this.updatepkt,
    };
    this.apiService.changePost(p, this.who).subscribe(post => {
      console.log(post);
      this.apiService.getPeople();
      this.apiService.runGetPeople();
    });
  }

}

