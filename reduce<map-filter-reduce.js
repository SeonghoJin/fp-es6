import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';
import { go } from 'fxjs';

const users = [{
    name: 'AA', age: 35,
},{
    name: 'BB', age: 25,
},{
    name: 'CC', age: 15,
},{
    name: 'DD', age: 25,
},{
    name: 'EE', age: 35,
}];

console.log(
    _.reduce((total, u) => {
        if(u.age >= 30) return total;
        return total + u.age;
    }, 0, users)
)

console.log(
    go(
        users,
        L.filter(u => u.age < 30),
        L.map(user => user.age),
        _.reduce((a, b) => a + b)
    )
)