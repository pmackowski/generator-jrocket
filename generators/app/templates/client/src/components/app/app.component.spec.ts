import {
    TestComponentBuilder,
    describe,
    expect,
    injectAsync,
    it,
    beforeEachProviders
    } from 'angular2/testing';
import {Component, View, provide, DirectiveResolver} from 'angular2/angular2';

import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {AppComponent} from './app.component';

import {DefaultOptions, Http, MockBackend, BaseRequestOptions} from 'angular2/http';
import {Injector} from 'angular2/core';
import {HelloWorldService} from '../../services/hello-world.service';
/*
class MockHelloWorldService extends HelloWorldService {

    getGreeting() {
        return "asas"; //Observable.of( new Response('foo'));
    }
}*/

@Component({selector: 'test-cmp'})
@View({directives: [AppComponent]})
class TestComponent {}

export function main() {

    describe('App component', () => {

        /*beforeEachProviders(() => [
            provide(HelloWorldService, {useClass: MockHelloWorldService}),
            Http, ConnectionBackend, RequestOptions
        ]);*/

        it('should get a response', () => {
            var connection; //this will be set when a new connection is emitted from the backend.
            var text; //this will be set from mock response
            var injector = Injector.resolveAndCreate([
                MockBackend,
                provide(Http, {useFactory: (backend, options) {
                    return new Http(backend, options);
                }, deps: [MockBackend, BaseRequestOptions]}]);
        var backend = injector.get(MockBackend);
        var http = injector.get(Http);
        backend.connections.subscribe(c => connection = c);
        http.request('something.json').subscribe(res => {
            text = res.text();
        });
        connection.mockRespond(new Response({body: 'Something'}));
        expect(text).toBe('Something');
    });


        it('should ask for PIN', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            return tcb//.overrideTemplate(TestComponent, '<div><home></home></div>')
                .createAsync(TestComponent).then((fixture) => {
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
console.log(compiled);
                //expect(compiled).toContainText('Enter PIN');
                //expect(compiled.querySelector('h3')).toHaveText('Status: Enter PIN');
            });
        }));

    });
}

