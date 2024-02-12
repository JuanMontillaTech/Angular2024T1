import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { contadorComponent } from './app/contador.Component';
 

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
 