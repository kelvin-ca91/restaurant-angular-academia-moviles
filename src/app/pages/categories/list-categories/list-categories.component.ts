import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ICategory } from 'src/app/interfaces/categories';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss'],
})
export class ListCategoriesComponent implements OnInit {
  listCategories: ICategory[] = [];
  loading: boolean;
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.loadList();
  }

  private async loadList() {
    try {
      this.loading = true;
      this.listCategories = await this.categoriesService.listCategory();
      this.loading = false;
    } catch (error) {}
  }

  async deleteCategory(id: string) {
    try {
      this.loading = true;
      await this.categoriesService.deleteCategory(id);
      this.loadList();
      this.loading = false;
    } catch (error) {}
  }
}
