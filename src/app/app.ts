import {bootstrap, provide, Component} from 'angular2/angular2';
import {RouteConfig, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {CookieListComponent} from './cookie-list.component';
import {CookieDetailComponent} from './cookie-detail.component';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>'
})
@RouteConfig([
    new Redirect({path: '/', redirectTo: '/cookies'}),
    new Route({path: '/cookies', component: CookieListComponent, name: 'CookieList'}),
    new Route({path: '/cookies/:id', component: CookieDetailComponent, name: 'CookieDetail'})
])
class AppComponent {
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);

// TODO: include and bootstrap the service