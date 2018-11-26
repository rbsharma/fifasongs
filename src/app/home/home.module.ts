import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import { SubCategoryComponent } from './sub-category/sub-category.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home.routes';


@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    SubCategoryComponent
  ],
  providers: []
})
export class HomeModule { }
