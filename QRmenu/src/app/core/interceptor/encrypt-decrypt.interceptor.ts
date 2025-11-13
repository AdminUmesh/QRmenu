import { HttpInterceptorFn } from '@angular/common/http';

export const encryptDecryptInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
