import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api_url } from './variables';

@Injectable({
  providedIn: 'root'
})
export class PcmApiService {

  constructor(
    private http: HttpClient
  ) { }

  getWebContentBanner(company: string, page: string): Observable<IGetWebContentBannerResponse> {
    return this.http.get<IGetWebContentBannerResponse>(`${api_url}/website-content/${company}/banners/${page}`);
  }
}

export interface IGetWebContentBannerResponse {
  banners: { [key: string]: Banner; };
  count: number;
}

export interface Banner {
  meta: Meta;
  documents: Document[];
}

export interface Document {
  url: string;
  size: string;
  languages: string[];
}

export interface Meta {
  title: { [key: string]: string; };
  description: { [key: string]: string; };
  altText: { [key: string]: string; };
  href: { [key: string]: string; };
  duration: number;
}
