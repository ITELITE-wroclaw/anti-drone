import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { newsObj } from './news';

import gsap from 'gsap';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, AfterViewInit {
  constructor(private sanitizer: DomSanitizer) {}

  html: SafeHtml;
  itemLD = productLD;

  news: News[] = newsObj;
  paragraphText: string = '';

  @ViewChild('paragraph')
  paragraphElement: ElementRef;

  @ViewChild('line')
  lineElement: ElementRef;

  ngOnInit() {
    this.html = this.getSafeHTML(this.itemLD);
  }

  getSafeHTML(jsonLD: { [key: string]: any }): SafeHtml {
    const json = jsonLD
      ? JSON.stringify(jsonLD, null, 2).replace(/<\/script>/g, '<\\/script>')
      : '';

    const html = `<script type="application/ld+json">${json}</script>`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngAfterViewInit(): void {
    gsap
      .fromTo(
        '.title',
        {
          opacity: 0,
          x: -180,
        },
        {
          opacity: 1,
          x: 40,
        }
      )
      .delay(0.7);

    gsap
      .fromTo(
        '.date',
        {
          opacity: 0,
          x: 90,
        },
        {
          opacity: 1,
          x: 0,
        }
      )
      .delay(0.44);

    this.writeEffect();
  }

  writeEffect(): void {
    function addLetter(letter: string, i: number) {
      this.paragraphText += letter;

      if (this.news[0].description.length - 1 == i)
        setTimeout(() => {
          this.lineElement.nativeElement.remove();
        }, 1450);
    }

    for (let i = 0; i < this.news[0].description.length; i++) {
      setTimeout(
        addLetter.bind(this, this.news[0].description[i], i),
        i * 46 + 50
      );
    }
  }
}

interface News {
  title: string;
  description: string;
  date: string;
}

const productLD = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://antidroneantennas.com/#/news',
  },
  headline: 'New anti drone antennas project.',
  image: '',
  author: {
    '@type': 'Organization',
    name: 'ITELITE',
    url: 'https://itelite.net/',
  },
  publisher: {
    '@type': 'Organization',
    name: '',
    logo: {
      '@type': 'ImageObject',
      url: '',
    },
  },
  datePublished: '2023-09-25',
};
