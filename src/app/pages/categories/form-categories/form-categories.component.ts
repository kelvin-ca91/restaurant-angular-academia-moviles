import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/interfaces/categories';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-categories',
  templateUrl: './form-categories.component.html',
  styleUrls: ['./form-categories.component.scss'],
})
export class FormCategoriesComponent implements OnInit {
  formCategoria: FormGroup;
  loading: boolean;
  category: ICategory;
  constructor(
    private fb: FormBuilder,
    private categoriesServices: CategoriesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.loading = true;
    this.loadForm();
    await this.loadInfo();
    this.loading = false;
  }

  private async loadInfo() {
    try {
      const params = this.activatedRoute.snapshot.paramMap;
      const categoryId = params.get('categoryId');
      if (categoryId) {
        this.category = await this.categoriesServices.showCategory(categoryId);
        this.formCategoria.get('name').setValue(this.category.name);
        this.formCategoria
          .get('description')
          .setValue(this.category.description);
      }
    } catch (error) {}
  }

  private loadForm() {
    this.formCategoria = this.fb.group({
      name: [null, [Validators.required, Validators.min(3)]],
      description: [null],
    });
  }

  async validForm(category: ICategory) {
    try {
      if (this.formCategoria.valid) {
        this.loading = true;
        if (this.category?._id) {
          const { _id } = this.category;
          category._id = _id;
          await this.categoriesServices.updateCategory(category);
        } else {
          await this.categoriesServices.saveCategory(category);
        }

        this.router.navigate(['/categories', 'list']);
        this.loading = false;
      }
    } catch (error) {}
  }
}
