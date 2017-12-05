import { Component, OnInit } from '@angular/core';

import { BoardService } from '.././service/board.service';

import { ResponseList } from '../../common-layout/model/response-list';
import { Article } from '.././model/article';

@Component({
  selector: 'app-article-grid',
  templateUrl: './article-grid.component.html',
  styles: ['']
})
export class ArticleGridComponent implements OnInit {

  articleList: Article[];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }

  getArticleList() {
    this.boardService.getArticleList('17')
      .subscribe(
        (model: ResponseList<Article>) => {
          if (model.data) {
            this.articleList = model.data;
          }
        },
        (err) => {},
        () => {}
    );
  }

}
