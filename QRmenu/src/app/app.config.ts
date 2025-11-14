import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { logInterceptor } from './core/interceptor/log.interceptor';
import { tokenInterceptor } from './core/interceptor/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([logInterceptor, tokenInterceptor])), //Attach tokenInterceptor
  ],
};

// Import provideHttpClient for UseHttp Client in app
//  Import withInterceptors for use intercepter in Http Request and Response