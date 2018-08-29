import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article/article.component';

// 文章显示组件
@Component({
  selector: 'app-article-show',
  templateUrl: './article-show.component.html',
  styleUrls: ['./article-show.component.css']
})
export class ArticleShowComponent implements OnInit {
  // 引入Article类
  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }

  // 文章组件中调用Article类方法，票数+1
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  // 文章组件中调用Article类方法，票数-1
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
