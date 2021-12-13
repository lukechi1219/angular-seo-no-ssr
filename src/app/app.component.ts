import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-seo-no-ssr';

  constructor(private metaTagService: Meta) {
  }

  ngOnInit() {

    // this.metaTagService.updateTag({ charset: 'UTF-8' },);

    this.metaTagService.addTags([
      { name: 'author', content: 'luke.chi@gmail.com' },
      // { name: 'keywords', content: 'Angular SEO Integration, Music CRUD, Angular Universal' },
      // { name: 'robots', content: 'index, follow' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
    ]);
  }
}
