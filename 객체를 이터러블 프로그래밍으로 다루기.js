import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';
import { go } from 'fxjs';

const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

// values

console.log(Object.values(obj1));

_.go(
    obj1,
    Object.values,
    _.map(a => a + 10),
    console.log
)

function *myValues (obj) {
    for(const k in obj) yield obj[k];
}

_.go(
    obj1,
    myValues,
    _.map(a => a + 10),
    console.log
);

// entries
console.log("My Entries");

function *myEntries (obj){
    for(const k in obj) {
        yield [k, obj[k]];
    }
}


_.go(
    obj1,
    myEntries,
    _.take(3),
    L.map(([k, v] )=> ({[k] : v})),
    _.reduce(Object.assign),
    console.log
)

// keys
console.log("MyKeys");

function* myKeys(obj) {
    for(const k in obj){
        yield k;
    }
}

_.go(
    obj1,
    myKeys,
    _.each(console.log),
);




