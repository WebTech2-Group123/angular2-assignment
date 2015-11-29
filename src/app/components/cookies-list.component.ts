import {Component, NgFor} from 'angular2/angular2';
import {CookiesService} from '../services/cookies.service';
import {Cookie} from '../model/cookie';

@Component({
    selector: 'cookies-list',
    template: `
         <h1>Cookies list</h1>
         <ul>
            <li *ng-for="#cookie of cookies">
                <div class="cookie">
                    <h2>{{cookie.name}}</h2>
                    <p>{{cookie.description}}</p>
                </div>
            </li>
         </ul>
    `
})
export class CookiesListComponent {
    private cookies:Cookie[];

    constructor(private cookiesService:CookiesService) {
        cookiesService.get().subscribe(cookies => this.cookies = cookies);
    }
}