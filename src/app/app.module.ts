import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { TitleComponent } from './page/title/title.component';
import { MetaComponent } from './page/meta/meta.component';
import { NavComponent } from './lib/fe/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleComponent,
    MetaComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/angular-seo-no-ssr' }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
