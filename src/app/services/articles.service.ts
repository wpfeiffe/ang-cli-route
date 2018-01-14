import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Article } from "./article";

@Injectable()
export class ArticlesService {

  urlBase: string = 'https://jsonplaceholder.typicode.com';

  constructor(public httpClient: HttpClient) { }

  public getAllArticles(): Observable<Array<Article>> {
    return this.httpClient.get<Array<Article>>(`${this.urlBase}/posts`);
  }

  public getArticle(id: number): Observable<Article> {
    return this.httpClient.get<Article> (`${this.urlBase}/posts/${id}`)


  }


}
