import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    importProvidersFrom(
      NgCircleProgressModule.forRoot({
        radius: 60,
        outerStrokeWidth: 10,
        innerStrokeWidth: 5,
        outerStrokeColor: '#7841D9',
        innerStrokeColor: '#e7e8ea',
        animationDuration: 300,
        showTitle: false,
        showSubtitle: false,
        showUnits: false,
        showInnerStroke: true,
        responsive: true
      }),
      HttpClientModule
    )
  ]
};
