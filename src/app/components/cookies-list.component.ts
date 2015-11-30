import {Component, NgFor} from 'angular2/angular2';
import {CookiesService} from '../services/cookies.service';
import {Cookie} from '../model/cookie';

@Component({
    selector: 'cookies-list',
    templateUrl: 'app/components/cookies-list.component.html'
})
export class CookiesListComponent {

    // store a copy of the cookies in this component
    private cookies:Cookie[];

    constructor(private cookiesService:CookiesService) {

        // load the last available cookies from the service
        this.cookies = cookiesService.getCookies();

        // subscribe for cookies updates (eg. cookies retrieved via HTTP GET)
        cookiesService.cookies$.subscribe(cookies => this.cookies = cookies);
    }
}