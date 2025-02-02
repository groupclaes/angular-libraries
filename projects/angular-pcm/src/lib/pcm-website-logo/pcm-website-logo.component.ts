import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { api_url } from '../variables';

@Component({
    selector: 'pcm-website-logo',
    templateUrl: './pcm-website-logo.component.html',
    styleUrls: ['./pcm-website-logo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PcmWebsiteLogoComponent implements OnInit {
  @Input() company: string = 'gro'
  @Input() id: string = '100'
  @Input() darkId: string | undefined
  @Input() height: string | undefined
  @Input() width: string | undefined

  constructor(private ref: ChangeDetectorRef, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.company) {
      this.ref.markForCheck()
    }
  }

  get url(): SafeUrl | null {
    if (this.id != null && !isNaN(+this.id)) {
      return this.sanitizer.sanitize(SecurityContext.URL, `${api_url}/content/${this.company}/website/logo/${this.id}`)
    }

    return null
  }
  darkUrl(): SafeUrl | null {
    if (this.darkId != null && !isNaN(+this.darkId)) {
      return this.sanitizer.sanitize(SecurityContext.URL, `${api_url}/content/${this.company}/website/logo/${this.darkId}`)
    }

    return null
  }
}
