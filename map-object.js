import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';
import { go } from 'fxjs';


const object = (entries) => _.go(
    entries,
    L.map(([k, v]) => ({[k] : v})),
    _.reduce(Object.assign)
)

const mapObject = (f, obj) => _.go(
    obj,
    L.entries,
    _.map(([k, v]) => [k, f(v)]),
    object
)

console.log(mapObject(a => a + 10, {a : 1, b: 2, c: 3}));
// {a : 11, b: 12, c: 13}
