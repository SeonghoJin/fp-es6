import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';

_.go(
    _.range(2, 10),
    _.map(a => _.go(
            _.range(1,10),
            _.map((b) => a * b),
            )
    ),
    console.log
)

_.go(
    _.range(2, 10),
    _.map(a => _.go(
        _.range(1, 10),
        _.map(b => `${a}*${b}=${a*b}`)
    )),
    console.log
)