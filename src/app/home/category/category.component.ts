import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StubModel, InterestCategoryModel } from '../../models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(
    private router: Router,
    private activated: ActivatedRoute) { }

  stubModel: StubModel = new StubModel();
  selectedCategory: InterestCategoryModel = new InterestCategoryModel();
  ngOnInit() {
    let selectedCategoryTitle = this.activated.parent.snapshot.params.categoryTitle;

    this.selectedCategory = this.stubModel.getCategoryData().find(x => x.title == selectedCategoryTitle);
    //console.log(this.selectedCategory);
  }
}
