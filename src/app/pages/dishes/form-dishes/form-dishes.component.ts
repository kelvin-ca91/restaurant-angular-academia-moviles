import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/dishes.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ICategory } from 'src/app/interfaces/categories';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IDish } from 'src/app/interfaces/dishes';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-dishes',
  templateUrl: './form-dishes.component.html',
  styleUrls: ['./form-dishes.component.scss'],
})
export class FormDishesComponent implements OnInit {
  imgURL: any;
  listCategories: ICategory[];
  dish: IDish;
  formDishes: FormGroup;
  loading: boolean;
  private fileUpload;
  constructor(
    private dishesService: DishesService,
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
    private router: Router,
    private storage: AngularFireStorage,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.loading = true;
    this.loadForm();
    await this.loadCategories();
    await this.loadInfo();

    this.loading = false;
  }

  private async loadInfo() {
    try {
      const params = this.activatedRoute.snapshot.paramMap;
      const dishId = params.get('dishId');

      if (dishId) {
        this.dish = await this.dishesService.showDish(dishId);
        const {
          category: { _id },
          name,
          description,
          price,
        } = this.dish;

        this.formDishes.get('category_id').setValue(_id);
        this.formDishes.get('name').setValue(name);
        this.formDishes.get('description').setValue(description);
        this.formDishes.get('price').setValue(price);
      }
    } catch (error) {}
  }

  private loadForm() {
    this.formDishes = this.fb.group({
      category_id: [null, [Validators.required]],
      name: [null, [Validators.required, Validators.minLength(3)]],
      description: [null],
      price: [0, [Validators.required, Validators.min(1)]],
    });
  }

  private async loadCategories() {
    try {
      this.listCategories = await this.categoriesService.listCategory();
    } catch (error) {}
  }

  beforeUpload = (file): boolean => {
    const { type } = file;
    if (type.match(/image\/*/) == null) {
      return;
    }
    this.fileUpload = file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imgURL = reader.result;
    };
    return false;
  };

  async validateForm(dish: IDish) {
    try {
      if (this.formDishes.valid) {
        this.loading = true;
        if (this.fileUpload) {
          const avatar = `${String(new Date().getTime())}.jpg`;
          this.storage.upload(avatar, this.fileUpload);
          dish.avatar = avatar;
        }

        if (this.dish?._id) {
          const { _id } = this.dish;
          dish._id = _id;
          await this.dishesService.updateDish(dish);
        } else {
          await this.dishesService.saveDish(dish);
        }

        this.router.navigate(['/dishes/list']);
        this.loading = false;
        Swal.fire({
          text: 'Registrado correctamente',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      }
    } catch (error) {}
  }
}
