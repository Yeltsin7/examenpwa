import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { Home } from './app/home/home';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: Home },
      // { path: 'ui', component: UiComponent } // luego si agregas /ui
    ])
  ]
});