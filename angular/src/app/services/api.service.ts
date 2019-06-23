import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from './../interfaces/people.interface';
import { Book } from './../interfaces/book.interface';
import { BehaviorSubject } from 'rxjs';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpClient: HttpClient;
  liczba: number;
  data: People = null;
  private postsObs = new BehaviorSubject<Array<People>>([]);
  posts$ = this.postsObs.asObservable();
  constructor(httpClient: HttpClient){
    
    this.httpClient = httpClient;
    this.runGetPeople();

  }

  public getPeople(): Promise<People> {
    return this.httpClient
      .get(`http://localhost/angular/public/angular`)
      .toPromise() as Promise<People>;
  }

    /** Dodajemy nowy post */
    addPost(post: People): Observable<People> {
      return this.httpClient.post<People>('http://localhost/angular/public/angular', post);
      
    }

    /** Calendar */
    addCalendar(post: Book): Observable<Book> {
      return this.httpClient.post<Book>('http://localhost/angular/public/calendartest', post);
      
    }
    // 
    runGetPeople(){
      this.getPeople()
      .then((json: People) => {
        console.warn('dostaje dane z api');
        this.data = json;
        // this.data = json
        this.liczba = Object.keys(this.data).length;
      })
      .catch(err => {
        console.warn(err);
        // alert('Serwer nie działa.');
      });
    }

    
  /** Aktualizujemy pola w post */
  changePost(post: People, who: number) {
    // return this.httpClient.patch('http://localhost/angular/public/angular' + post.id, post);
    return this.httpClient.patch('http://localhost/angular/public/angular/' + who, post);
  }
}
