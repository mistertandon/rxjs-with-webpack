const jQuery = require('jquery');
const RxJs = require('rxjs/Rx');

var setStream = new Set([
    'parvesh',
    'kumar',
    'tandon', JSON.stringify({
        'gotra': 'khatri'
    }),
    9650780712
]);

/**
 *setStreamResSel: Array stream Result selector.
 */
var setStreamResSel;
var setStream$;

setStreamResSel = jQuery('#rxjs-set-result-div');
setStream$ = RxJs.Observable.from(setStream);

setStream$.subscribe(
    (subscribedData) => {

        setStreamResSel.append(`<li>${subscribedData}</li>`);
    },
    (erroObj) => {
        console.log(erroObj);
    },
    () => {
        console.log('Iteration over Set element has been finished.');

    }

);
