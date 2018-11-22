import { Component, OnInit } from '@angular/core';

import { StubModel, InterestCategoryModel, InterestCategoryYearModel, SongModel } from '../../models/category.model';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
  categoryData: Array<InterestCategoryModel> = new Array<InterestCategoryModel>();
  stubModel: StubModel = new StubModel();
  ngOnInit() {
    this.categoryData = this.stubModel.getCategoryData();
    //console.log(this.categoryData);
    //console.log(this.selectedCategory);
  }

  selectedCategory: InterestCategoryModel = new InterestCategoryModel();
  CategorySelectedEvent(categoryId: string) {
    if (categoryId != null) {
      this.selectedCategory = this.categoryData.find(x => x.id == categoryId);
    } else {
      this.selectedCategory = null;
    }
    //console.log(this.selectedCategory);
  }

  selectedSubCategory: InterestCategoryYearModel = new InterestCategoryYearModel();
  SubCategorySelectedEvent(subCategoryId: string) {
    if (subCategoryId != null) {
      this.selectedSubCategory = this.selectedCategory.subCategories.find(x => x.id == subCategoryId);
    } else {
      this.selectedSubCategory = null;
    }
    //console.log(this.selectedSubCategory);
  }
}
