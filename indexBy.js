import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';
import { users } from './resource/users.js';

const myIndexBy = (callback, objects) => {
    return _.go(
        objects,
        _.reduce((prev, current) => Object.assign(prev, {
            [callback(current)]: current
        }))
    );
}

console.log(_.indexBy(u => u.id, users));
const value = myIndexBy(u => u.id, users);
console.log(value);
console.log(value['10']);