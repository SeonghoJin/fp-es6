import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';
import { go } from 'fxjs';

const f = x => x + 10;
const g = x => x - 5;
const fg = x => f(g(x));
console.log(fg(10));

_.go(
    10,
    fg,
    console.log
);
