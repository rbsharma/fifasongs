import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StubModel, InterestCategoryModel, InterestCategoryYearModel, SongModel } from '../../models/category.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }

  categoryData: Array<InterestCategoryModel> = new Array<InterestCategoryModel>();
  stubModel: StubModel = new StubModel();
  ngOnInit() {
    this.categoryData = this.stubModel.getCategoryData();
    //console.log(this.categoryData);
    //console.log(this.selectedCategory);
  }

  selectedCategory: InterestCategoryModel = new InterestCategoryModel();
  CategorySelectedEvent(categoryId: string) {
    this.router.navigate(['/category', this.categoryData.find(x => x.id == categoryId).title]);

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
