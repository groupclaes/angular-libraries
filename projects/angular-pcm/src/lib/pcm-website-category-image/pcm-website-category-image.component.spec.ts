import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcmWebsiteCategoryImageComponent } from './pcm-website-category-image.component';

describe('PcmWebsiteCategoryImageComponent', () => {
  let component: PcmWebsiteCategoryImageComponent;
  let fixture: ComponentFixture<PcmWebsiteCategoryImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcmWebsiteCategoryImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcmWebsiteCategoryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
