import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';

const users = [{
    name: 'AA', age: 35,
},{
    name: 'BB', age: 35,
},{
    name: 'CC', age: 35,
},{
    name: 'DD', age: 35,
},{
    name: 'EE', age: 35,
}];

console.log(
    _.reduce((total, u) => total + u.age, 0, users)
)
const add = (a,b) => a + b;
const ages = L.map(u => u.age);

console.log(
_.reduce(add, ages(users))
);

