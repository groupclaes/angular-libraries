import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcmWebcontentBannerComponent } from './pcm-webcontent-banner.component';

describe('PcmWebcontentBannerComponent', () => {
  let component: PcmWebcontentBannerComponent;
  let fixture: ComponentFixture<PcmWebcontentBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcmWebcontentBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcmWebcontentBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
