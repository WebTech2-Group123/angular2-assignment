import {bootstrap, provide, Component} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';
import {RouteConfig, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {CookiesService} from './services/cookies.service';
import {CookiesListComponent} from './components/cookies-list.component';
import {CookieFormComponent} from './components/cookie-form.component';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/app.html'
})
@RouteConfig([
    new Redirect({
        path: '/',
        redirectTo: '/cookies'
    }),
    new Route({
        path: '/cookies',
        component: CookiesListComponent,
        name: 'CookiesList'
    }),
    new Route({
        path: '/cookies/new',
        component: CookieFormComponent,
        name: 'CookieForm'
    })
])
class AppComponent {
}

bootstrap(AppComponent, [
    CookiesService,
    HTTP_BINDINGS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
]);
