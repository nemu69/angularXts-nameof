import { InjectionToken } from "@angular/core";

export const APP_SETTINGS = new InjectionToken<AppSettings>("AppSettings");

export interface AppSettings
{
	readonly StationNum: number;
	readonly BaseIp: string;
	readonly ServerIp: string;
}