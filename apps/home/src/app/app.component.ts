import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit    {
  title = 'home'
  loading = true;

  ngOnInit(): void {
    this.loading = true;
  }

}
