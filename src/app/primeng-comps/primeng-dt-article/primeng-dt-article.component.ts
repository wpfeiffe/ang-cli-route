///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { Article } from "../../services/article";
import { ArticlesService } from "../../services/articles.service";

@Component({
  selector: 'app-primeng-dt-article',
  templateUrl: './primeng-dt-article.component.html',
  styleUrls: ['./primeng-dt-article.component.css']
})
export class PrimengDtArticleComponent implements OnInit {

  articles: Article[];
  selectedArticle: Article;

  constructor(public articleService: ArticlesService) { }

  ngOnInit() {
    this.articleService.getAllArticles().subscribe(
      (data) => this.articles = data,
      (err) => console.log(err)
    );
  }
}
