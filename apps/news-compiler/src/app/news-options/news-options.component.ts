import { Component, OnDestroy, OnInit } from '@angular/core';
import { FinanceTypes, SportsTypes } from '../news-items';

@Component({
  selector: 'project-portfolio-news-options',
  templateUrl: './news-options.component.html',
  styleUrls: ['./news-options.component.css'],
})
export class NewsOptionsComponent implements OnInit, OnDestroy  {
  sports = new Array<SportsTypes>();
  finance = new Array<FinanceTypes>();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
    
  }

  ngOnInit() {
    const tempSports = window.localStorage.getItem("sports");
    if(!tempSports) {
      this.setSportsDefault();
    } else {
      this.sports = JSON.parse(tempSports);
      console.log(JSON.stringify(this.sports));
    }
    if(!window.localStorage.getItem("finance")) {
      this.setFinanceDefault();
    }
  }

  ngOnDestroy() {
    window.localStorage.setItem("Sports", JSON.stringify(this.sports));
    window.localStorage.setItem("Finance", JSON.stringify(this.finance));
  }

  setSportsDefault(): void {
    this.sports.push({genre: "Football", selected: false});
    this.sports.push({genre: "Basketball", selected: false});
    this.sports.push({genre: "Soccer", selected: false});
    this.sports.push({genre: "Golf", selected: false});
    this.sports.push({genre: "Baseball", selected: false});
    window.localStorage.setItem("Sports", JSON.stringify(this.sports));
  }

  setFinanceDefault(): void {
    this.finance.push({genre: "Banking", selected: false});
    this.finance.push({genre: "HedgeFunds", selected: false});
    window.localStorage.setItem("Finance", JSON.stringify(this.finance));
  }
}
