import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articles } from './../interfaces/articles.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiarticlesService {

  httpClient: HttpClient;
  liczba: number;
  data: Articles = null;

  constructor(httpClient: HttpClient){
    
    this.httpClient = httpClient;
    this.runGetArticles();

  }


  public getArticles(): Promise<Articles> {
    return this.httpClient
      .get(`http://localhost/angular/public/article`)
      .toPromise() as Promise<Articles>;
  }


  runGetArticles(){
    this.getArticles()
    .then((json: Articles) => {
      console.warn('dostaje dane z api');
      this.data = json;
      this.liczba = Object.keys(this.data).length;
    })
    .catch(err => {
      console.warn(err);
      // alert('Serwer nie działa.');
    });
  }
}
