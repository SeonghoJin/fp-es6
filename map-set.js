import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';

let m = new Map();
m.set('a', 1);
m.set('b', 2);
m.set('c', 3);

_.go(
    m,
    L.filter(([k, v]) => v % 2),
    _.takeAll,
    console.log
)

let s = new Set();
s.add(10);
s.add(20);
s.add(30);
const add = (a, b) =>  a + b;
console.log(_.reduce(add, s));