import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsOptionsComponent } from './news-options.component';

describe('NewsOptionsComponent', () => {
  let component: NewsOptionsComponent;
  let fixture: ComponentFixture<NewsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
