import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';

const obj2 = {a : 1, b: 2, c: 3, d: 4, e: 5};
const myPick = (candidates, obj) => _.go(
    obj,
    Object.entries,
    _.filter(([key, _]) => {return candidates.includes(key)}),
    _.map(([k, v]) => ({[k] : v})),
    _.reduce((previous, current) => {
        return Object.assign(previous, current);
    })
);

console.log(myPick(['b', 'c', 'd', 'e', 'f', 'g'], obj2));

const pick = (ks, obj) => _.go(
    ks,
    L.map(k => [k, obj[k]]),
    L.reject(([_, v]) => v === undefined),
    _.object,
);

console.log(pick(['a', 'b', 'c', 'e', 'h'], obj2));
