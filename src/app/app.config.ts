import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter, withPreloading, PreloadAllModules, withComponentInputBinding } from "@angular/router";
import { routes } from "./app.routes";
import { SettingsService } from "./config/settings.service";

export const appConfig: ApplicationConfig = {
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: (settingsService: SettingsService) => () => settingsService.initialize(),
			deps: [ SettingsService ],
			multi: true,
		},
		importProvidersFrom(
			BrowserModule,
		),
		provideAnimations(),
		provideHttpClient(withInterceptors([])),
		provideRouter(
			routes,
			withComponentInputBinding(),
			withPreloading(PreloadAllModules)
		),
	],
};