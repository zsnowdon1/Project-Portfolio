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
      title: "Ultimate NBA free agency guide: Needs, priorities and spending options for all 30 teams",
      subtitle: "With free agency well underway, here's how things line up for every NBA team, including which ones could trade for Kevin Durant.",
      url: "https:/nba/insider/story/_/id/34156470/ultimate-2022-nba-free-agency-guide-needs-priorities-spending-options-all-30-teams"
    } as NewsItem

    const NewsItem2 = {
      title: "The Knicks might throw big money at free agent Jalen Brunson. Should they?",
      subtitle: "Jalen Brunson became a star playing next to Luka Doncic. Here's what a change of scenery could mean for the coveted free-agent guard.",
      url: "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0627%2Fr1029766_1296x729_16%2D9.jpg&w=238&h=133&scale=crop&cquality=80&location=center"
    } as NewsItem

    this.stories.push(NewsItem1);
    this.stories.push(NewsItem2);

  }

}
