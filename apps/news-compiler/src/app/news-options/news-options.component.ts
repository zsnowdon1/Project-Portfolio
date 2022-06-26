import { Component, OnDestroy, OnInit } from '@angular/core';
import { Finances, FinanceTypes, Sports, SportsTypes } from '../news-items';

@Component({
  selector: 'project-portfolio-news-options',
  templateUrl: './news-options.component.html',
  styleUrls: ['./news-options.component.css'],
})
export class NewsOptionsComponent implements OnInit, OnDestroy  {
  sports;
  finance;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
    this.sports = new Array<SportsTypes>()
    this.finance = new Array<FinanceTypes>();
  }

  ngOnInit() {
    const tempSports = window.localStorage.getItem("sports");
    if(!tempSports) {
      this.setSportsDefault();
    } else {
      this.sports = JSON.parse(tempSports);
    }
    const tempFinance = window.localStorage.getItem("finance");
    if(!tempFinance) {
      this.setFinanceDefault();
    } else {
      this.finance = JSON.parse(tempFinance);
    }
  }

  ngOnDestroy() {
    this.pushSports();
    this.pushFinance();
  }

  setSportsDefault(): void {

    for(let i = 0; i < Object.keys(Sports).length / 2; i++) {
      this.sports.push({genre: Sports[i], selected: false});
    }
    this.pushSports();
  }

  pushSports(): void {
    window.localStorage.setItem("sports", JSON.stringify(this.sports));
  }

  setFinanceDefault(): void {
    for(let i = 0; i < Object.keys(Finances).length / 2; i++) {
      this.finance.push({genre: Finances[i], selected: false});
    }
    this.pushFinance();
  }

  pushFinance(): void {
    window.localStorage.setItem("finance", JSON.stringify(this.finance));
  }

  selectSport(genre: string): void {
    for(let i = 0; i < this.sports.length; i++) {
      if(this.sports[i].genre === genre) {
        this.sports[i].selected = !this.sports[i].selected;
        this.pushSports();
        return;
      }
    }
  }
}
