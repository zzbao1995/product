import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // Article数组
  @Input() articles: Article[];

  // 构造函数初始化
  constructor() {
    this.articles = [];
  }

  ngOnInit() {}

  // 用户输入信息，添加到文章数组
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    // 通过在HTMl元素添加变量，获得title和link
    console.log(`Adding article title: ${title.value} and link:${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  // 返回排序后的数组
  sortedArticles(): Article[] {
    // 如果少于两篇文章，不排序，直接返回文章数组
    if (this.articles.length < 2) {
      return this.articles;
    }
    // 投票数排序
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}

// 可被引入的Article类
export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
      this.title = title;
      this.link = link;
      this.votes = votes || 0;
  }

  // 票数+1
  voteUp(): void {
      this.votes += 1;
  }

  // 票数-1
  voteDown(): void {
      this.votes -= 1;
  }

  // 截取域名
  domain(): string {
      try {
          const link: string = this.link.split('//')[1];
          return link.split('/')[0];
      } catch (err) {
          return null;
      }
  }
}
