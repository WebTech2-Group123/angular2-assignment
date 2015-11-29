import {Injectable} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Cookie} from '../model/cookie';

@Injectable()
export class CookiesService {

    private _cookies;

    constructor(private _http:Http) {
        this._cookies = [];
        this._http.get('cookies.json')
            .map(res => res.json())
            .subscribe(cookies => {
                this._cookies = cookies;
                console.log(cookies);
            });
    }

    get() {
        return this._cookies;
    }
}
