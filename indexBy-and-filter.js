import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';

import { users } from './resource/users.js';

const realUser = _.filter(({age}) => age >= 30, users);
// console.log(realUser);
const users2 = _.indexBy(({age}) => age, users);
// console.log(users2);

_.go(
    users2,
    L.entries,
    L.filter(([_,{age}]) => age >= 30),
    L.take(2),
    _.object,
    console.log
)