import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemsModalComponent } from './news-items-modal.component';

describe('NewsItemsModalComponent', () => {
  let component: NewsItemsModalComponent;
  let fixture: ComponentFixture<NewsItemsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsItemsModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsItemsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
