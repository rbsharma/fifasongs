import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { StaticOverviewComponent } from './static-overview/static-overview.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StaticOverviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    StaticOverviewComponent
  ]
})
export class SharedModule { }
