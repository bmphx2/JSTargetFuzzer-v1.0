new Uint8Array(10);
new Uint8ClampedArray(10);
new Uint8ClampedArray(1024);
new Uint8ClampedArray(69);
new Int16Array(3);
new BigUint64Array(1024);
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
}
let v22 = new F18();
const v24 = new Map();
function f25() {
    return v22;
}
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
}
let v32 = new F26(f25, v22, v24, Map, BigUint64Array, F18);
[f25,,v22,v32] = v24;
