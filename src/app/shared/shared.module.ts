import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { StaticOverviewComponent } from './static-overview/static-overview.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StaticOverviewComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    StaticOverviewComponent
  ]
})
export class SharedModule { }
