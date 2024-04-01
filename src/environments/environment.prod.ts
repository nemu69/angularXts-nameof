// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: true,

	baseAlarmUrl: ":7276/apiAlarm",
	baseUrlAlarmSignalR: ":7276/alarmsHub",

	baseCameraUrl: ":7277/apiCamera",
	baseCameraTestModeSignalRUrl: ":7277/cameraHub",
	baseOTTagCameraSignalRUrl: ":7277/iotHub",

	baseIOTUrl: ":7278/apiIOT",
	baseMonitorAPISignalRUrl: ":7280/iotHub",

	baseStationCycleUrl: ":7282/apiStationCycle",
	baseADSSignalRUrl: ":7275/stationCycleHub",
	baseOTTagTWINCATSignalRUrl: ":7275/iotHub",

	baseUserUrl: ":7283/apiUser",
	baseUserLocalUrl: "https://localhost:7283/apiUser",

	language: "en",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
