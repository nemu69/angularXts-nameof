import { Routes } from "@angular/router";

export const routesPublic: Routes = [
	{
		path: "",
		redirectTo: "welcome",
		pathMatch: "full",
	},
	{
		path: "auth",
		title: "Fives - Auth",
		loadComponent: () => import("./app.component").then(m => m.AppComponent),
	},
];

const routesPrivate: Routes = [

];

export const routes: Routes = [
	...routesPublic,
	...routesPrivate,
];