import {Injectable, Observable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {Cookie} from '../model/cookie';

@Injectable()
export class CookiesService {

    // observable to use from components
    cookies$:Observable<Array<Cookie>>;

    private cookiesObserver;
    private dataStore:{
        cookies: Array<Cookie>
    };

    constructor(private http:Http) {

        // initialize observable (NB: async)
        this.cookies$ = new Observable(observer => this.cookiesObserver = observer).share();
        this.dataStore = {
            cookies: []
        };

        // load cookies from the JSON file
        this.http.get('cookies.json')
            .map(res => res.json())
            .subscribe(data => {

                // update data store
                this.dataStore.cookies = data;

                // push the new list of cookies into the Observable stream
                if (this.cookiesObserver) {
                    this.cookiesObserver.next(this.dataStore.cookies);
                }

            }, error => console.error('Could not load cookies: ' + error));
    }

    // return the current available cookied
    getCookies():Cookie[] {
        return this.dataStore.cookies;
    }

    // create a new cookie
    createCookie(cookie:Cookie):void {

        // add cookie to the datastore
        this.dataStore.cookies.unshift(cookie);

        // push the new list of cookies into the Observable stream
        if (this.cookiesObserver) {
            this.cookiesObserver.next(this.dataStore.cookies);
        }
    }
}
