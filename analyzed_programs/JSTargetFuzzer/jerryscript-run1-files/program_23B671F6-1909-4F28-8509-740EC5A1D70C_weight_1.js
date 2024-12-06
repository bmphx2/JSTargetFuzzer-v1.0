const v5 = new Uint8ClampedArray(15);
new Int16Array(1322);
new BigInt64Array(129);
new WeakSet();
const v15 = new Uint16Array(Uint16Array, Uint16Array);
const o20 = {
    m(a17, a18, a19) {
        return this;
    },
};
const v22 = o20.m;
function f23(a24, a25, a26) {
    'use strict';
    return 15;
}
f23(15, 6, 4294967296);
Reflect.set(v22, v15);
const o32 = {
    "apply": f23,
};
new Proxy(v5, o32);
