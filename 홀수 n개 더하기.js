import * as L from "fxjs";

function f1(limit, list) {
    let acc = 0;
    for (const a of list) {
        if(a % 2) {
            const b = a * a;
            acc += b;
            if(--limit == 0) break;
        }
    }
    return acc;
}

console.log(f1(20, [1,2,3,4,5,6,7,8,9,10]));

function f2(limit, list) {
    let acc = 0;
    for (const a of L.filter(a => a%2, list)) {
        const b = a * a;
        acc += b;
        if(--limit == 0) break;
    }
    return acc;
}

console.log(f2(20, [1,2,3,4,5,6,7,8,9,10]));

function f3(limit, list) {
    let acc = 0;
    for (const a of L.map(a => a * a, L.filter(a => a%2, list))) {
        acc += a;
        if(--limit == 0) break;
    }
    return acc;
}

console.log(f3(20, [1,2,3,4,5,6,7,8,9,10]));

function f4(limit, list) {
    let acc = 0;
    for (const a of L.take(limit, L.map(a => a * a, L.filter(a => a%2, list)))) {
        acc += a;
    }
    return acc;
}

console.log(f4(20, [1,2,3,4,5,6,7,8,9,10]));

function f5(limit, list) {
    return L.reduce((acc, a) => acc + a,
        0,
        L.take(limit, 
            L.map(a => a * a,
                 L.filter(a => a%2, list)
                )
            )
    )
}

console.log(f5(20, [1,2,3,4,5,6,7,8,9,10]));

function f6(limit, list) {
    return L.go(
        list,
        L.filter(a => a % 2),
        L.map(a => a * a),
        L.take(limit),
        L.reduce((acc, a) => acc + a),
    )
}

console.log(f6(20, [1,2,3,4,5,6,7,8,9,10]));