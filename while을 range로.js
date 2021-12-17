import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';

function f1(end) {
    let i = 0;
    while(i < end) {
        
        console.log(i);
        i++;
    }

}

f1(10);

function f2(end) {
    _.each(console.log, L.range(end))
}


f2(10);

function f3(end) {
    let i = 1;
    while(i < end){
        console.log(i);
        i += 2;
    }
}

f3(10);

function f4(end) {
    _.each(console.log, L.range(1, 10, 2));
}

f4(10);