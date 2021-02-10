import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcmWebsiteLogoComponent } from './pcm-website-logo.component';

describe('PcmWebsiteLogoComponent', () => {
  let component: PcmWebsiteLogoComponent;
  let fixture: ComponentFixture<PcmWebsiteLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcmWebsiteLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcmWebsiteLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
