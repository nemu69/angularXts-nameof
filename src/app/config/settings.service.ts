import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppSettings } from "./settings";
import { BehaviorSubject, tap } from "rxjs";

/**
 * Settings Service Singleton Class.\
 * Used to read the content of the app.config.json file to config the app at initialisation,\
 * without the need to transpile from typescript to javascript again.
 */
@Injectable({
	providedIn: "root",
})
export class SettingsService
{
	private _settings$: BehaviorSubject<AppSettings | null> = new BehaviorSubject<AppSettings | null>(null);
	readonly appSettings$ = this._settings$.asObservable();
	private _settings: AppSettings;

	/**
	 * Simple settings getter
	 */
	get settings()
	{
		return this._settings;
	}

	constructor(private _httpClient: HttpClient) { }

	/**
	 * @description Promise that resolves once the method reads the content of the app.Config.json file.
	 * @returns A Promise<unknown>, resolves when all settings properties are intantiated.
	 */
	initialize()
	{
		return new Promise((resolve) =>
		{
			this._httpClient.get<AppSettings>("app.config.json").pipe(
				tap((settings: AppSettings) =>
				{
					// console.log("before settings next");
					// this._settings = settings;
					this._settings = settings;
					this._settings$.next(settings);
					// console.log("_settings goes => ", this._settings);
					resolve(true);
				})
			).subscribe();
		});
	}
}