import {Component} from 'angular2/core';

import {HelloWorldService} from '../../services/hello-world.service';

@Component({
    template: `
        <h1 class="display-3">Message from server: {{ greeting }}</h1>
    `
})
export class HelloComponent {

    greeting : string;

    constructor(helloWorldService : HelloWorldService) {
        helloWorldService.getGreeting().subscribe(greeting => {
            this.greeting = greeting.text();
        });
    }

}
