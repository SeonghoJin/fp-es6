import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';
import { go } from 'fxjs';

const split = sep => str => str.split(sep)
const queryToObject = _.pipe(
    split('&'),
    L.map(split('=')),
    L.map(([k, v]) => ({[k]: v})),
    _.reduce((previous, current) => {
        return Object.assign(previous, current);
    })
)

console.log(queryToObject('a=1&c=CC&d=DD'))