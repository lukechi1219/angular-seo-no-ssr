import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private titleService: Title, private metaTagService: Meta) {
  }

  ngOnInit() {
    // this.metaTagService.updateTag({ charset: 'UTF-8' },);

    this.metaTagService.addTags([
      { name: 'author', content: 'luke.chi@gmail.com' },
      // { name: 'robots', content: 'index, follow' },
      // { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]);
  }
}
