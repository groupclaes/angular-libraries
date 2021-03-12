import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PcmApiService } from '../pcm-api.service';

import { PcmWebcontentBannerComponent } from './pcm-webcontent-banner.component';

describe('PcmWebcontentBannerComponent', () => {
  let component: PcmWebcontentBannerComponent;
  let fixture: ComponentFixture<PcmWebcontentBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcmWebcontentBannerComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
        // PlatformBrowserDynamicModuleTesting
      ],
      providers: [
        PcmApiService
      ]
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
