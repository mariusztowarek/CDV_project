import { Component, OnInit } from '@angular/core';
import {ApiarticlesService} from './../../services/apiarticles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  apiarticlesService: ApiarticlesService;
  boxes = [1, 2, 3, 4, 5, 6];

  constructor(apiarticlesService: ApiarticlesService) { 
    this.apiarticlesService = apiarticlesService;
    console.log(this.apiarticlesService.data);
  }

  onScroll(e) {
    if(this.boxes.length>=30) {
      console.log('No more items');
      return;
    }
    console.log('scrolled!!', e);
    const moreBoxes = [1, 2];
    this.boxes = [...this.boxes, ...moreBoxes];
  }

  ngOnInit() {
  }

}
