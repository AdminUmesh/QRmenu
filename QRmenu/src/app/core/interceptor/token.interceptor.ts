import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../../Services/token.service';
//import { TokenService } from '../../services/token.service';
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
   const tokenService = inject(TokenService);
   const token = tokenService.getToken();

   console.log(token);
   // If token exists, clone request and add Authorization header
   const authReq = token
     ? req.clone({
         setHeaders: {
           Authorization: `Bearer ${token}`,
         },
       })
     : req;

     console.log(authReq);
   // Pass request to next handler
   return next(authReq);
};
