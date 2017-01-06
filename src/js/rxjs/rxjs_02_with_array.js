//require("bootstrap");

const RxJs = require('rxjs/Rx');
const jQuery = require('jquery');

//require("../css/02_rxjs_with_array.css");

var arrayStream = ['parvesh', 'kumar', 'tandon', 'khatri'];

/**
 *arrayStreamResSel: Array stream Result selector.
 */
var arrayStreamResSel;
var arrayStream$;

arrayStreamResSel = jQuery("#rxjs-with-array-ul");

arrayStream$ = RxJs.Observable.from(arrayStream);

arrayStream$.subscribe(

    (subscribeddata) => {

        let liElement = `<li>${subscribeddata}</li>`;

        arrayStreamResSel.append(liElement);

    },
    (err) => {
        console.log(err);
    },
    () => {
        console.log('Subsription from array observable has been finished.');
    },

);
