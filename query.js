import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';
import { go } from 'fxjs';

const obj1 = {
    a: 1,
    b: undefined,
    c: 'CC',
    d: 'DD',
};

function query1(obj) {
    let res = '';
    for(const k in obj) {
        const v = obj[k];
        if(v === undefined) continue;
        if(res !== '') res += '&';
        res += k + '=' + v;
    }
    return res;
}

function query2(obj) {
    return Object.entries(obj)
        .reduce((query, [k, v], i) => {
            if( v === undefined) return query;
            return `${query}${i > 0 ? '&' : ''}${k}=${v}`
        }, '');
}

function query3(obj) {
    return go(
        Object.entries(obj),
        _.reject(([_, v]) => v === undefined),
        _.map(([k, v]) => `${k}=${v}`),
        _.reduce((a, b) => `${a}&${b}`)
    );
}

const join = (sep) => iter  => _.reduce((a,b) => `${a}${sep}${b}`, iter);

const query4 = _.pipe(
        Object.entries,
        L.reject(([_, v]) => v === undefined),
        L.map(([k, v]) => `${k}=${v}`),
        join('&')
)

console.log(query1(obj1));
console.log(query2(obj1));
console.log(query3(obj1));
console.log(query4(obj1));

