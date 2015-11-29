import {Injectable} from 'angular2/angular2';
import {Cookie} from '../model/cookie';

@Injectable()
export class CookiesService {

    private _cookies:Cookie[];

    constructor() {
        this._cookies = [
            new Cookie('Cookie 1', 'lorem'),
            new Cookie('Cookie 2', 'ipsum'),
            new Cookie('Cookie 3', 'generator')
        ];
    }

    get() {
        return this._cookies;
    }
}
