new WeakSet();
const v7 = new Float64Array(9);
const v10 = new Uint16Array(2190);
const v13 = new Uint16Array(255);
v13.valueOf = 1073741824n;
function* f14(a15, a16, a17, a18) {
    'use strict';
    yield a16;
    Object.defineProperty(v10, 1196, { writable: true, configurable: true, enumerable: true, value: a17 });
    yield* a17;
    return a15;
}
f14(9, 1073741824n, 2190, 9);
v7.valueOf = f14;
v13[9] = 1176823182n;
