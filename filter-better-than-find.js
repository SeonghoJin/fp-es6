import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';
import { go } from 'fxjs';

const users = [
    {name: 'AA'},
    {name: 'BB'},
    {name: 'CC'},
    {name: 'DD'},
    {name: 'EE'}
];

const user = _.find(u => u.name == 'FD', users);
console.log(user);

if(user) {
    console.log(user);
}

//

console.log(_.take(1, L.filter(u => u.name == 'CB', users)));