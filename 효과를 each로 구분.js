import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';

function f1(end) {
    _.go(
        L.range(1, end, 2),
        _.each(console.log));
}

f1(10);