import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { Home } from './app/home/home';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';

bootstrapApplication(App, {
  providers: [
    provideServiceWorker('ngsw-worker.js', { enabled: !isDevMode() }),
  ],
});