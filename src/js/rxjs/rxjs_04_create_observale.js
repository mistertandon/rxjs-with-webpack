const RxJs = require('rxjs/Rx');
const jQuery = require('jquery');

var observer$;

 observer$ = new RxJs.Observable(
    (observer) => {

        observer.next('Emitted first value.');
        observer.next('Emitted second value.');

        setTimeout(() => {

            observer.next('Emitted third value: Asynchronously');
            observer.complete();
        }, 3000);
    });

observer$.subscribe(
    (subscribedData) => {

        console.log(subscribedData);
    },
    (errObj) => {

        console.log(errObj);
    },
    (streamEnding) => {

        console.log('Emitted all values.');
    }
);
