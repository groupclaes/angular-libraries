import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { api_url } from '../variables';

@Component({
  selector: 'pcm-website-banner',
  templateUrl: './pcm-website-banner.component.html',
  styleUrls: ['./pcm-website-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PcmWebsiteBannerComponent implements OnInit, OnChanges {
  @Input() company: string = 'gro';
  @Input() culture: string = 'nl';
  private currentSize: string = 'small';
  css: SafeStyle | null = null;

  constructor(
    private ref: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private element: ElementRef
  ) { }

  ngOnInit() {
    if (this.company) {
      setTimeout(() => {
        this.onResize(true);
      }, 120);
    }
  }

  ngOnChanges() {
    this.onResize(true);
  }

  onResize(force?: boolean) {
    if (this.company) {
      if (this.element.nativeElement.offsetWidth < 760 && (this.currentSize !== 'small' || force)) {
        this.css = this.sanitizer.bypassSecurityTrustStyle(
          `background-image:url('${api_url}/content/${this.company}/website/banner-image/100/${this.culture}?size=small');`
        );
        this.currentSize = 'small';
        this.ref.markForCheck();
        // tslint:disable-next-line: max-line-length
      } else if (this.element.nativeElement.offsetWidth >= 760 && this.element.nativeElement.offsetWidth < 1140 && (this.currentSize !== 'medium' || force)) {
        this.css = this.sanitizer.bypassSecurityTrustStyle(
          `background-image:url('${api_url}/content/${this.company}/website/banner-image/100/${this.culture}?size=medium');`
        );
        this.currentSize = 'medium';
        this.ref.markForCheck();
      } else if (this.element.nativeElement.offsetWidth >= 1140 && (this.currentSize !== 'large' || force)) {
        this.css = this.sanitizer.bypassSecurityTrustStyle(
          `background-image:url('${api_url}/content/${this.company}/website/banner-image/100/${this.culture}?size=large');`
        );
        this.currentSize = 'large';
        this.ref.markForCheck();
      }
    }
  }
}
