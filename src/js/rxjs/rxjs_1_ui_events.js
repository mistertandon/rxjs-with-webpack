var RxJs = require('rxjs/Rx');
var jQuery = require('jquery');

var targetBtnSel;
var targetBtnResultSel;
var targetBtn$;

var targetDivSel;
var targetDivResultSel;
var targetDiv$;

var targetInputSel;
var targetInputResultSel;
var targetInput$;

targetBtnSel = jQuery("#target-click-btn");
targetBtnResultSel = jQuery("#target-click-btn-result");

targetBtn$ = RxJs.Observable.fromEvent(targetBtnSel, 'click');

targetBtn$.subscribe(
    function(event) {

        targetBtnResultSel.text("Click event is called on click button.");
    },
    function(errObj) {

        console.log(errObj);
    }
);

targetDivSel = jQuery("#target-onmouseover-div");
targetDivResultSel = jQuery("#target-onmouseover-result");

targetDiv$ = RxJs.Observable.fromEvent(targetDivSel, 'mousemove');

targetDiv$.subscribe(
    function(event) {

        targetDivResultSel.text('clientX : ' + event.clientX + ' AND clientY : ' + event.clientY);
    }
);

targetInputSel = jQuery("#target-input-element");
targetInputResultSel = jQuery("#target-input-result");
targetInput$ = RxJs.Observable.fromEvent(targetInputSel, 'keyup');

targetInput$.subscribe(
    function(event) {

        targetInputResultSel.text(targetInputSel.val());
    }
);
