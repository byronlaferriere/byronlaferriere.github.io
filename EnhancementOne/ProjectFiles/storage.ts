//importing angular modules

import { InjectionToken } from "@angular/core";


//creating constant var to be exported and used for cookies/browser history
export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
    providedIn: 'root',
    factory: () => localStorage
});