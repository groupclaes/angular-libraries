import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PcmArtikelFotoComponent } from './pcm-artikel-foto/pcm-artikel-foto.component';
import { PcmWebsiteBannerComponent } from './pcm-website-banner/pcm-website-banner.component';
import { PcmWebsiteCategoryImageComponent } from './pcm-website-category-image/pcm-website-category-image.component';
import { PcmWebsiteLogoComponent } from './pcm-website-logo/pcm-website-logo.component';

@NgModule({
  declarations: [
    PcmWebsiteBannerComponent,
    PcmWebsiteLogoComponent,
    PcmArtikelFotoComponent,
    PcmWebsiteCategoryImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PcmWebsiteBannerComponent,
    PcmWebsiteLogoComponent,
    PcmArtikelFotoComponent,
    PcmWebsiteCategoryImageComponent
  ]
})
export class AngularPcmModule { }
