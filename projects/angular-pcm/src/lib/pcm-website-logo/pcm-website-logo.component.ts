import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { api_url } from '../variables';

@Component({
  selector: 'pcm-website-logo',
  templateUrl: './pcm-website-logo.component.html',
  styleUrls: ['./pcm-website-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PcmWebsiteLogoComponent implements OnInit {
  @Input() company: string = 'gro'
  @Input() id: string = '100'

  constructor(private ref: ChangeDetectorRef, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.company) {
      this.ref.markForCheck()
    }
  }

  get url(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(`${api_url}/content/${this.company}/website/logo/${this.id}`)
  }
}
