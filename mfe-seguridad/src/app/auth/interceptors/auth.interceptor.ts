import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // 1. Verificamos si la petición es para el login (para excluirla del token)
  const isLoginRequest = req.url.includes('/api/auth/login'); // Ajusta la ruta exacta de tu login si es distinta

  // 2. Obtenemos el token almacenado (localStorage, sessionStorage, o tu servicio de estado)
  const token = localStorage.getItem('auth_token'); // O la forma en que guardes el token

  // 3. Si existe el token y NO es la petición de login, clonamos la petición agregando la cabecera Authorization
  if (token && !isLoginRequest) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedReq);
  }

  // 4. Si es login o no hay token, la petición pasa sin modificaciones
  return next(req);
};
