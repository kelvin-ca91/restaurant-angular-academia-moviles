import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutes } from './auth.routing';
import { NzAntDesignModule } from '../nz-ant-design/nz-ant-design.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthRoutes, NzAntDesignModule, ReactiveFormsModule],
})
export class AuthModule {}
