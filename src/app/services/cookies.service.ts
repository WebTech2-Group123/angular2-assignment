import {Injectable} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Cookie} from '../model/cookie';

@Injectable()
export class CookiesService {

    constructor(private http:Http) {
        this.cookiesRequest = this.http.get('cookies.json')
            .map(res => res.json());
    }

    get() {
        return this.cookiesRequest;
    }
}
