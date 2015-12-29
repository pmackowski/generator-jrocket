import {Component} from 'angular2/core';
import {HelloWorldService} from '../../services/hello-world.service';

@Component({
    selector: 'jrocket',
    providers: [HelloWorldService],
    template: '<div>{{ greeting }}</div>',
})
export class AppComponent {

    greeting : string;

    constructor(helloWorldService : HelloWorldService) {
         helloWorldService.getGreeting().subscribe(greeting => {
             this.greeting = greeting.text();
         });
    }

}
