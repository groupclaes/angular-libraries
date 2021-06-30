import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { IGetWebContentBannerResponse, PcmApiService } from '../pcm-api.service'

@Component({
  selector: 'pcm-webcontent-banner',
  templateUrl: './pcm-webcontent-banner.component.html',
  styleUrls: ['./pcm-webcontent-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PcmWebcontentBannerComponent implements OnInit, OnChanges {
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
    private api: PcmApiService,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.api.getWebContentBanner(this.company, this.page).subscribe(resp => {
      if (resp.count > 0) {
        const nativeElement: HTMLElement = this.el.nativeElement
        nativeElement.style.display = 'block'
        // build slides array
        this.resp = resp
        this.onResize()

        this.slides.forEach(slide => {
          slide.state = 'background'
        })
        this.currentIndex = 0
        if (this.slideCount > 1) {
          this.startRotation()
        } else {
          this.slides[0].state = 'fade-in'
        }
      }

      this.ref.markForCheck()
    }, err => {
      // this will err 404 if no banners are avail
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.resp && changes.culture.previousValue !== changes.culture.currentValue && this.culture) {
      this.buildArray()
      this.ref.markForCheck()
    }
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
        // find current document for selection
        const document = banner.documents.find(e => e.languages.indexOf(this.culture) > -1 && e.size === this.currentSize)
        if (document != null) {
          // check if required texts are available
          if (banner.meta.title && banner.meta.description) {
            this.slides.push({
              state: (this.slides.length == this.currentIndex) ? 'fade-in' : 'background',
              title: banner.meta.title[this.culture],
              description: banner.meta.description[this.culture],
              alt: banner.meta.altText[this.culture],
              href: (banner.meta.href != null) ? banner.meta.href[this.culture] : null,
              css: this.sanitizer.bypassSecurityTrustStyle(`background-image:url('${document.url}');`),
              duration: banner.meta.duration
            })
          }
        }
      }
    }
  }

  startRotation() {
    this.slides.forEach(slide => {
      slide.state = 'background'
    })
    // check timeout on current slide
    const currentSlide = this.slides[this.currentIndex]
    const timeout = currentSlide.duration ?? 4500
    currentSlide.state = 'fade-in'

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
    const current = this.currentSize

    if (window.innerWidth < 760 && this.currentSize !== 'small') {
      this.currentSize = 'small'
    } else if (window.innerWidth >= 760 && window.innerWidth < 1140 && this.currentSize !== 'medium') {
      this.currentSize = 'medium'
    } else if (window.innerWidth >= 1140 && this.currentSize !== 'large') {
      this.currentSize = 'large'
    }

    if (current != this.currentSize) {
      // build slides array
      this.buildArray()
      this.ref.markForCheck()
    }
  }

  selectIndex(index: number) {
    this.currentIndex = index
    this.onResize()

    if (this.timeout) {
      window.clearTimeout(this.timeout)
    }

    this.startRotation()
  }

  get description(): string {
    if (this.slides && this.slides.length > 0) {
      return this.slides[this.currentIndex].description
    }
    return ''
  }

  get slideCount(): number {
    if (this.slides) {
      return this.slides.length
    }
    return 0
  }
}