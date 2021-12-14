import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  project = 'angular-seo-no-ssr';
  title = 'How to do SEO without Angular Universal Server-Side Rendering?';

  constructor(private titleService: Title, private metaTagService: Meta) {
  }

  ngOnInit() {

    this.titleService.setTitle(this.title);

    // this.metaTagService.updateTag({ charset: 'UTF-8' },);

    this.metaTagService.addTags([
      { name: 'author', content: 'luke.chi@gmail.com' },
      {
        name: 'description',
        content: 'Did you know that Google Search supports JavaScript since May 2019? ' +
          'This site shows you Angular features for SEO without Angular Universal.'
      },
      // { name: 'robots', content: 'index, follow' },
      // { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]);
  }
}
