import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

// URL de tu endpoint de login en Spring Boot (ajustala según tu API)
  private loginUrl = 'http://localhost:8081/api/auth/login';

  // Inicializamos el BehaviorSubject leyendo directamente del localStorage (para sobrevivir al F5)
  private currentUserSubject = new BehaviorSubject<string | null>(localStorage.getItem('cod_usuario'));
  public currentUser$: Observable<string | null> = this.currentUserSubject.asObservable();

  constructor() {}
// MÉTODO HTTP PARA AUTENTICAR EN EL BACKEND
  login(credentials: any): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials);
  }

  // Método que llamas al hacer login exitoso
  setSession(token: string, codUsuario: string): void {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('cod_usuario', codUsuario);

    // Emitimos el nuevo usuario a toda la aplicación en tiempo real
    this.currentUserSubject.next(codUsuario);
  }

  // Método para cerrar sesión y limpiar todo
  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('cod_usuario');
    this.currentUserSubject.next(null);
  }

  // Obtener el valor actual de forma inmediata si se requiere
  get usuarioActual(): string | null {
    return this.currentUserSubject.value;
  }

  // Validar si hay una sesión activa
  get estaAutenticado(): boolean {
    return !!this.currentUserSubject.value;
  }
}
