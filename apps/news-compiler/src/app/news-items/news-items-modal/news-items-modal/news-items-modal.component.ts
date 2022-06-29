import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-portfolio-news-items-modal',
  templateUrl: './news-items-modal.component.html',
  styleUrls: ['./news-items-modal.component.css'],
})
export class NewsItemsModalComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() url?: string;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
  }

}
