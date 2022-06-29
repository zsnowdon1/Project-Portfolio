import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '@project-portfolio/ui';
import { NewsOptionsComponent } from './news-options/news-options.component';
import { NewsItemsComponent } from './news-items/news-items.component';

@NgModule({
  declarations: [AppComponent, NewsOptionsComponent, NewsItemsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
