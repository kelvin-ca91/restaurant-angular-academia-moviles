import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/dishes.service';
import { IDish } from 'src/app/interfaces/dishes';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.scss'],
})
export class ListDishesComponent implements OnInit {
  loading: boolean;
  listDishes: IDish[];
  p = 1;
  fecha: Date = new Date();
  constructor(private dishesService: DishesService) {}

  async ngOnInit() {
    this.loadDishes();
  }
  private async loadDishes() {
    try {
      this.listDishes = await this.dishesService.listDish();
      this.listDishes = this.listDishes.map((item) => {
        const { avatar } = item;
        if (avatar === 'default.jpg') {
          item.avatar = '/assets/images/default.jpg';
        } else {
          item.avatar = `${environment.firebase.urlFiles}${avatar}?alt=media&token=${environment.firebase.tokenStorage}`;
        }
        return item;
      });
    } catch (error) {}
  }

  deleteDish(id: string) {
    Swal.fire({
      title: '¿Estás seguro de eliminar?',
      text: 'Al eliminar no podras volver a visualizarlo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then(async (result) => {
      if (result.value) {
        await this.dishesService.deleteDish(id);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        this.loadDishes();
      }
    });
  }
}
