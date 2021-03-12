import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IGetWebContentBannerResponse, PcmApiService } from '../pcm-api.service';

@Component({
  selector: 'pcm-webcontent-banner',
  templateUrl: './pcm-webcontent-banner.component.html',
  styleUrls: ['./pcm-webcontent-banner.component.scss']
})
export class PcmWebcontentBannerComponent implements OnInit {
  @Input() company: string = 'gro'
  @Input() culture: string = 'nl'
  @Input() page: string = 'homepage'

  private currentSize: string = 'small'
  currentIndex: number = 0
  timeout: number = 3000

  resp: IGetWebContentBannerResponse | null = null
  slides: any[] = []

  constructor(
    private ref: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private api: PcmApiService
  ) { }

  ngOnInit(): void {
    this.api.getWebContentBanner(this.company, this.page).subscribe(resp => {
      if (resp.count > 0) {
        // build slides array
        this.resp = resp
        this.onResize()
        console.log(this.slides)

        this.slides.forEach(slide => {
          slide.state = 'background'
        })
        this.currentIndex = 0;
        if (this.slideCount > 1) {
          this.startRotation(true)
        } else {
          this.slides[0].state = 'fade-in'
        }
      }

      this.ref.markForCheck()
    })
  }

  ngOnDestroy() {
    if (this.timeout) {
      window.clearTimeout(this.timeout)
    }
  }

  buildArray() {
    this.slides = []
    if (this.resp) {
      for (const bannerEntry in this.resp.banners) {
        const banner = this.resp.banners[bannerEntry]
        console.log(bannerEntry, banner)
        // find current document for selection
        const document = banner.documents.find(e => e.languages.indexOf(this.culture) > -1 && e.size === this.currentSize)
        if (document != null) {
          this.slides.push({
            state: 'background',
            title: banner.meta.title[this.culture],
            href: banner.meta.href[this.culture],
            css: this.sanitizer.bypassSecurityTrustStyle(`background-image:url('${document.url}');`),
            duration: banner.meta.duration
          })
        }
      }
    }
  }

  startRotation(fixResize?: boolean) {
    this.slides.forEach(slide => {
      slide.state = 'background'
    })
    // check timeout on current slide
    const currentSlide = this.slides[this.currentIndex]
    const timeout = currentSlide.duration ?? 4500
    currentSlide.state = 'fade-in'

    if (fixResize) {
      this.onResize()
    }
    this.ref.markForCheck()

    this.timeout = window.setTimeout(() => {
      if (this.currentIndex < this.slideCount - 1) {
        this.currentIndex++
      } else {
        this.currentIndex = 0
      }
      this.startRotation()
      this.ref.markForCheck()
    }, timeout)
  }

  onResize() {
    if (window.innerWidth < 760 && this.currentSize !== 'small') {
      this.currentSize = 'small'
    } else if (window.innerWidth >= 760 && window.innerWidth < 1140 && this.currentSize !== 'medium') {
      this.currentSize = 'medium'
    } else if (window.innerWidth >= 1140 && this.currentSize !== 'large') {
      this.currentSize = 'large'
    }
    // build slides array
    this.buildArray()

    if (this.slideCount > 1) {
      this.startRotation(true)
    } else {
      this.slides[0].state = 'fade-in'
    }

    this.ref.markForCheck()
  }

  selectIndex(index: number) {
    this.currentIndex = index
    this.onResize()

    if (this.timeout) {
      window.clearTimeout(this.timeout)
    }

    this.startRotation()
  }



  get title(): string {
    if (this.slides && this.slides.length > 0) {
      return this.slides[this.currentIndex].title
    }
    return ''
  }

  get url(): string {
    if (this.slides && this.slides.length > 0) {
      return this.slides[this.currentIndex].href
    }
    return '#'
  }

  get slideCount(): number {
    if (this.slides) {
      return this.slides.length
    }
    return 0
  }
}