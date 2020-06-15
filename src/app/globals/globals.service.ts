import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GlobalsService {
    constructor(public router: Router){}
    public USERS = {
        token: 'users',
        store: 'localStorage',
        server: 'browsersIndexChecklogin',
        mask: "usertmp",
        send: () => {
            //this.send({ path: this.USERS.server, data: { token: this.USERS.get(false) } });
        },
        get: (skip) => {
            if (skip == true) {
                return (window.localStorage.getItem(this.USERS.store)) ? JSON.parse(window.localStorage.getItem(this.USERS.store)) : {};
            } else {
                return (window.localStorage.getItem(this.USERS.token)) ? window.localStorage.getItem(this.USERS.token) : null;
            }
        },
        check: (skip) => {
            return (skip == true) ? (window.localStorage.getItem(this.USERS.store) ? true : false) : (window.localStorage.getItem(this.USERS.token) ? true : false);
        },
        set: (data, skip) => {
            data = typeof data === 'object' ? JSON.stringify(data) : data;
            if (skip == true) {
                window.localStorage.setItem(this.USERS.store, data);
            } else {
                window.localStorage.setItem(this.USERS.token, data);
            }
        },
        tmp: (data: any = "") => {
            if (typeof data === 'object') {
                window.localStorage.setItem(this.USERS.mask, JSON.stringify(data));
                return true;
            } else {
                if (data == true) {
                    window.localStorage.removeItem(this.USERS.mask);
                    return true;
                } else {
                    if (window.localStorage.getItem(this.USERS.mask)) {
                        try {
                            return JSON.parse(window.localStorage.getItem(this.USERS.mask))
                        } catch (error) {
                            return false
                        }
                    } else {
                        return false;
                    }
                }
            }
        },
        remove: (skip: any = "") => {
            if (!skip) {
                window.localStorage.clear();

            } else {
                if (skip == true) {
                    window.localStorage.removeItem(this.USERS.store);
                } else {
                    window.localStorage.removeItem(this.USERS.token);
                }
            }
            this.USERS.navigate();
        },
        navigate: () => {

            this.router.navigate(['/login']);
        },
        
    }

}
