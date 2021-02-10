import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PcmArtikelFotoComponent } from './pcm-artikel-foto/pcm-artikel-foto.component';
import { PcmWebsiteBannerComponent } from './pcm-website-banner/pcm-website-banner.component';
import { PcmWebsiteLogoComponent } from './pcm-website-logo/pcm-website-logo.component';

@NgModule({
  declarations: [
    PcmWebsiteBannerComponent,
    PcmWebsiteLogoComponent,
    PcmArtikelFotoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PcmWebsiteBannerComponent,
    PcmWebsiteLogoComponent,
    PcmArtikelFotoComponent
  ]
})
export class AngularPcmModule { }
