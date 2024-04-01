import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { environment } from "@env/environment";
import "zone.js";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";
import "./styles/styles.scss";

if (environment.production)
	enableProdMode();

bootstrapApplication(AppComponent, appConfig)
	.catch(err => console.error(err));
