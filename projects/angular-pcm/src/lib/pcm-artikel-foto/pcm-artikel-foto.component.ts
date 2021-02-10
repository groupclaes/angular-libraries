import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { api_url } from '../variables';

@Component({
  selector: 'pcm-artikel-foto',
  templateUrl: './pcm-artikel-foto.component.html',
  styleUrls: ['./pcm-artikel-foto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PcmArtikelFotoComponent implements OnInit {
  @Input() company: string = 'mac';
  @Input() itemnum: string = '3523080006';
  @Input() thumbnail: boolean = false;

  constructor(
    private ref: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    if (this.company && this.itemnum) {
      this.ref.markForCheck();
    }
  }

  get url(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `${api_url}/${this.company}/artikel/foto/${this.itemnum}?thumb=${this.thumbnail}`
    );
  }
}
