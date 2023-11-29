import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // importProvidersFrom(HttpClientModule) replaces the module imports in a standalone components angular application
  // Read more here (https://angular.io/api/core/importProvidersFrom)
  // providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)]

  // provideHttpClient() is a method specifically made (and has more uses for the same context) for importing http client modules
  // Read more here (https://angular.io/api/common/http/provideHttpClient)
  providers: [provideRouter(routes), provideHttpClient()]
};
