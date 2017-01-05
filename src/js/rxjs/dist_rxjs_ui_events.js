var RxJs = require('rxjs/Rx');
var jQuery = require('jquery');

var targetBtnSel;
var targetBtn$;

function clickEventHandler(event) {

    console.log(event);
}

function clickEventErrorHandler(errorObj) {

    console.log(errorObj);
}

function clickEventCompletionHandler() {

    console.log('Completed');
}

targetBtnSel = jQuery("#target-click-btn");

targetBtn$ = RxJs.Observable.fromEvent(targetBtnSel, 'click');

targetBtn$.subscribe(
    function(event) {
        console.log(event);
    },
    function(errObj) {
        console.log(errObj);
    }
);
