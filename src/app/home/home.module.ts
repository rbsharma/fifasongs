import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    SubCategoryComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: []
})
export class HomeModule { }
