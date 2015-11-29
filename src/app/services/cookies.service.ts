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

        // initialize observable
        this.cookies$ = new Observable(observer => this.cookiesObserver = observer).share();
        this.dataStore = {
            cookies: []
        };

        // retrieve data
        this.loadCookies();
    }

    // TODO: refactor
    loadCookies() {
        this.http.get('cookies.json')
            .map(res => res.json())
            .subscribe(data => {

                // Update data store
                this.dataStore.cookies = data;

                // Push the new list of cookies into the Observable stream
                this.cookiesObserver.next(this.dataStore.cookies);

            }, error => console.log('Could not load cookies.'));
    }

    createCookie(cookie:Cookie) {
        this.dataStore.cookies.push(cookie);
        this.cookiesObserver.next(this.dataStore.cookies);
    }
}
