import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../news-items';
import { NewsItemsModalComponent } from './news-items-modal/news-items-modal/news-items-modal.component';

@Component({
  selector: 'project-portfolio-news-items',
  templateUrl: './news-items.component.html',
  styleUrls: ['./news-items.component.css'],
})
export class NewsItemsComponent implements OnInit {
  stories = new Array<NewsItem>();
  newsModal = NewsItemsModalComponent;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  ngOnInit(): void {
    this.stories = new Array<NewsItem>();

    const NewsItem1 = {
      title: "Title",
      subtitle: "sub",
      url: "google.com"
    } as NewsItem

    const NewsItem2 = {
      title: "Title 2",
      subtitle: "sub 2",
      url: "google.com"
    } as NewsItem
    this.stories.push(NewsItem1);
    this.stories.push(NewsItem2);
  }

}
