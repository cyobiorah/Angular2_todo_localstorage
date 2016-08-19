import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { TodosService } from './app/todos.service'
import { AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
// firebase dependency

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
]).catch((error: Error) => console.error(error));
