import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  project = 'angular-seo-no-ssr';
  title = 'How to do SEO without Angular Universal Server-Side Rendering?';
  description =
    'Did you know that Google Search supports JavaScript since May 2019? ' +
    'This site shows you Angular features for SEO without Angular Universal.';

  constructor(private titleService: Title, private metaTagService: Meta) {
  }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      {
        name: 'description', content: this.description
      },
    ]);
  }

}
