import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.scss']
})
export class MetaComponent implements OnInit {
  private title: string = '0123';
  private description: string = '4567';

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
