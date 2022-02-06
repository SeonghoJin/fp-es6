import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';

_.go(
    [1,2,3,0,0,0],
    _.takeWhile(a => a),
    _.each(console.log)
)

_.go(
    [1,2,3,0,0,0],
    _.takeUntil(a => !a),
    _.each(console.log)
)