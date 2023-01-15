// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
    // SERVER_URL: "http://127.0.0.1:8000/",
  // FrontEnd_URL: "http://localhost:4200/",
  // CHAT_URL: "ws://localhost:8000/ws/chat/",
  // SERVER_URL_WITH_OUT_SLASH: "http://127.0.0.1:8000",
  STRIPE_PUBLIC_KEY: "pk_test_51IwTvvIR19rXEZpRWoj9M4BGNy5nJ1GQOsXUZXHRD0PS3QGexQQSVNQR0vMB8jMoONQtO4RNQ30pC3N5BdgiGstB00shA8ejRI",
  SERVER_URL_WITH_OUT_SLASH: "",
  //SERVER_URL: "https://server."+ window.location.hostname.replace(/^[^.]+./, '') +".com/",
  SERVER_URL: "https://server."+ window.location.hostname +"/",
  //CHAT_URL: "wss://server."+ window.location.hostname.replace(/^[^.]+./, '') +"/ws/chat/",
  CHAT_URL: "wss://server."+ window.location.hostname +"/ws/chat/",
  FrontEnd_URL: window.location.origin,
  // LoginURL: "http://localhost:4442/",
  MainDomain: window.location.hostname,
  //MainDomain: window.location.hostname.replace(/^[^.]+./, ''),
  LoginURL: "https://accounts." + window.location.hostname +"/",
  //LoginURL: "https://accounts.theislamicnation.com/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
