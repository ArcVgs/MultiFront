export interface AuthResponse {
  codUsuario: string;
  desUsuario: string;
  codPerfil: string;
  desEmail: string | null;
  token: string;
  mensaje: string;
}

export interface LoginCredentials {
  codUsuario: string;
  password?: string; // Dependiendo de cómo pida las credenciales tu backend
}
