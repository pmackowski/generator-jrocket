import {bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AppComponent} from './components/app/app.component';

bootstrap(AppComponent, [HTTP_PROVIDERS]);