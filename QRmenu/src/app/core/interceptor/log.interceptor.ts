import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const logInterceptor: HttpInterceptorFn = (req, next) => {
  // Log outgoing request
  console.log('%c[HTTP REQUEST]', 'color: blue; font-weight: bold;', {
    url: req.url,
    method: req.method,
    body: req.body,
    headers: req.headers,
  });

  // Let the request continue & log response
  return next(req).pipe(
    tap({
      next: (event) => {
        console.log(
          '%c[HTTP RESPONSE]',
          'color: green; font-weight: bold;',
          event
        );
      },
      error: (err) => {
        console.error('%c[HTTP ERROR]', 'color: red; font-weight: bold;', err);
      },
    })
  );
};
