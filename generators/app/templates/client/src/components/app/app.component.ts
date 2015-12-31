import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from '../home/home.component';
import {HelloComponent} from '../hello/hello.component';

@Component({
    selector: 'jrocket',
    templateUrl: './components/app/app.html',
    styleUrls: ['./components/app/app.css'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent},
    {path: '/hello', name: 'Hello', component: HelloComponent}
])
export class AppComponent {
}
