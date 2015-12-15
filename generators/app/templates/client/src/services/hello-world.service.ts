import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class HelloWorldService {

    constructor(public http: Http) {
    }

    getGreeting() {
        return this.http.get('/api/hello');
    }

}
