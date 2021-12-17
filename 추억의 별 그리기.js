import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';

function f1(a){
    _.go(
    _.range(1, a),
    L.map(_.range),
    L.map(L.map(_ => '*')),
    L.map(_.reduce((a, b) => `${a}${b}`)),
    _.reduce((a, b) => `${a}\n${b}`),
    console.log)
}

const join = sep => _.reduce((a, b) => `${a}${sep}${b}`)

function f2(a){
    _.go(
    _.range(1, a),
    L.map(_.range),
    L.map(L.map(_ => '*')),
    L.map(join('')),
    join('\n'),
    console.log)
}

f1(10);
f2(10);