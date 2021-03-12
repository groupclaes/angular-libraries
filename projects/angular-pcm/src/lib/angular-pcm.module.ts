import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PcmApiService } from './pcm-api.service';

import { PcmArtikelFotoComponent } from './pcm-artikel-foto/pcm-artikel-foto.component';
import { PcmWebcontentBannerComponent } from './pcm-webcontent-banner/pcm-webcontent-banner.component';
import { PcmWebsiteBannerComponent } from './pcm-website-banner/pcm-website-banner.component';
import { PcmWebsiteCategoryImageComponent } from './pcm-website-category-image/pcm-website-category-image.component';
import { PcmWebsiteLogoComponent } from './pcm-website-logo/pcm-website-logo.component';

@NgModule({
  declarations: [
    PcmWebsiteBannerComponent,
    PcmWebsiteLogoComponent,
    PcmArtikelFotoComponent,
    PcmWebsiteCategoryImageComponent,
    PcmWebcontentBannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PcmWebsiteBannerComponent,
    PcmWebsiteLogoComponent,
    PcmArtikelFotoComponent,
    PcmWebsiteCategoryImageComponent,
    PcmWebcontentBannerComponent
  ],
  providers: [
    PcmApiService
  ]
})
export class AngularPcmModule { }
