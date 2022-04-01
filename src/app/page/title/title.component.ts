import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  private title: string = '123';
  private description: string = '456';

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
