import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {CookiesService} from '../services/cookies.service';
import {Cookie} from '../model/cookie';

@Component({
    templateUrl: 'app/components/cookie-form.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class CookieFormComponent {

    // possible difficulties for the cookies
    difficulties = [1, 2, 3, 4, 5];

    // store the current input of the form
    model = new Cookie('', '', 1, '');

    // inject the CookiesService
    constructor(private router:Router, private cookiesService:CookiesService) {
    }

    // called when the form is submitted
    onSubmit() {

        // the validation is done in the form
        // add the cookie to the list
        this.cookiesService.createCookie(this.model);

        // redirect to list page
        this.router.parent.navigate(['CookiesList']);
    }

}