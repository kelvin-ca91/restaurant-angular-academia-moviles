import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing';
import { PagesComponent } from './pages.component';
import { NzAntDesignModule } from '../nz-ant-design/nz-ant-design.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutes, NzAntDesignModule],
})
export class PagesModule {}
