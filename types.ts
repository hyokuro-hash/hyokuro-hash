
export interface Creator {
  id: string;
  name: string;
  category: string;
  followers: string;
  image: string;
  platforms: ('youtube' | 'instagram' | 'tiktok')[];
}

export interface CaseStudy {
  id: string;
  thumbnail: string;
  brandLogo: string;
  campaignName: string;
  results: string[];
}

export enum Language {
  KR = 'KR',
  EN = 'EN',
  JP = 'JP',
  CN = 'CN',
  VI = 'VI',
  TH = 'TH',
  ID = 'ID'
}
