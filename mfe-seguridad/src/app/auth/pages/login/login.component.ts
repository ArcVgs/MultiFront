import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      codUsuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      const credentials = this.loginForm.value;

     this.authService.login(credentials).subscribe({
  next: (response) => {
    this.isLoading = false;
    console.log('Login exitoso:', response);

    // Guardamos la sesión (esto actualiza el localStorage y el BehaviorSubject automáticamente)
    this.authService.setSession(response.token, response.codUsuario);

    // Redirigimos al Shell para que cargue el Home con los subsistemas del usuario
    window.location.href = 'http://localhost:4200/home';
  },
  error: (err) => {
    this.isLoading = false;
    this.errorMessage = 'Credenciales inválidas o error en el servidor.';
    console.error('Error de autenticación', err);
  }
});
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
