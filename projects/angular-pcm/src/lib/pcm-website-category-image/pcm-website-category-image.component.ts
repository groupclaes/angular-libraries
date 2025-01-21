import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'pcm-website-category-image',
    templateUrl: './pcm-website-category-image.component.html',
    styleUrls: ['./pcm-website-category-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PcmWebsiteCategoryImageComponent implements OnInit {
  @Input() company: string = 'dis'
  @Input() categories: any[] = []
  @Input() newPage: boolean = false
  @Input() link: boolean = true
  @Input() culture: string = 'nl'

  constructor() { }

  ngOnInit(): void {
  }

  get labelClass(): string {
    return `category-label ${this.company}-color`
  }
}
