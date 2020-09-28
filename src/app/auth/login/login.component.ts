import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passwordVisible = false;
  formLogin: FormGroup;
  loading: boolean;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadForm();
  }

  private loadForm() {
    this.formLogin = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  async login(credentials) {
    try {
      this.loading = true;
      if (this.formLogin.valid) {
        const token = await this.authService.login(credentials);
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard']);
      }
      this.loading = false;
    } catch (error) {}
  }
}
