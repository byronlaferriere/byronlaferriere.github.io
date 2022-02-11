//importing modules to create security token that will expire

import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { TripDataService } from '../services/trip-data.service';
/** After reading resources on different threats against the JWT, I noticed that this security feature may be vulnerable
 * to attacks. The JWT is saved per user and not re-authenticated on each sign in. Token Revocation may be a good solution to protecting
 * tokens from being stolen and reused, as well as adding a timed feature to these tokens, so that if users are on the website for 15 minutes
 * their session will expire, asking them to sign back in to continue.
 */
@Injectable({
providedIn: 'root'
})
export class AuthenticationService {

    constructor(
      @Inject(BROWSER_STORAGE) private storage: Storage,
      private tripDataService: TripDataService
      
) {
  
 }

public getToken(): string {
 return this.storage.getItem('travlr-token');
}

public saveToken(token: string): void {
 this.storage.setItem('travlr-token', token);
}

public login(user: User): Promise<any> {
 return this.tripDataService.login(user)
 .then((authResp: AuthResponse) => this.saveToken(authResp.token));
}

public register(user: User): Promise<any> {
 return this.tripDataService.register(user)
 .then((authResp: AuthResponse) => this.saveToken(authResp.token));
}

public logout(): void {
 this.storage.removeItem('travlr-token');
}


//adding an token revocation method that essentially times out tokens
//method was supplied by stackoverflow.com research
public isLoggedIn(): boolean {
 const token: string = this.getToken();
 if (token) {
 const payload = JSON.parse(atob(token.split('.')[1]));

 
 //this supplies the method to use when determining expiration of token
 return payload.exp > (Date.now() / 1000);
 } 
 else {
 return false;
 }
}

public getCurrentUser(): User {
 if (this.isLoggedIn()) {
 const token: string = this.getToken();
 const { email, name } = JSON.parse(atob(token.split('.')[1]));
 return { email, name } as User;
 }
}
}
