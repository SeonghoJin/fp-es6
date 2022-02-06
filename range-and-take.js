import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';

_.go(
    _.range(10),
    _.take(3),
    _.each(console.log)
);

// _.go(
//     L.range(Infinity),
//     L.map(_.delay(1000)),
//     L.take(100),
//     _.each(console.log)
// )

_.go(
    L.range(8),
    L.map(_.delay(100)),
    L.take(11),
    _.each(console.log)
)