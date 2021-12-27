import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';
import { go } from 'fxjs';

const it = (function *() {
    yield 10;
    yield 20;
    yield 30;
})();

console.log([...it]);

// object

const a =[['a', 1], ['b', 2], ['d', 1], ['c', 2]]
const b = {a: 1, b: 2, c: 2, d: 1};

const object = (entries) => _.go(
    entries,
    L.map(([k, v]) => ({[k] : v})),
    _.reduce(Object.assign)
)

const object1 = entries => _.reduce((obj, [ k, v]) => (obj[k] = v, obj), {}, entries);

console.log(object(a));
console.log("map")
let m = new Map();
m.set('a', 10);
m.set('b', 20);
m.set('c', 30);
console.log(object(m));
