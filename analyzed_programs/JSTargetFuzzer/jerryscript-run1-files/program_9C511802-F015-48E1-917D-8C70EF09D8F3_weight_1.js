function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -536870912;
    this.d = -536870912;
}
new F0();
new F0();
const v5 = new F0();
const v10 = new WeakMap();
v5 + F0;
const v13 = v5.split;
v10[v13] = v13;
new Uint8ClampedArray(129);
new Float64Array(806);
new Uint16Array(250);
new BigUint64Array(10);
new Int8Array(3);
function f31() {
    return Float64Array;
}
new Uint8ClampedArray(101);
new Uint16Array(5);
new Float64Array(256);
new Float64Array(1);
try {
    for (const v43 of "preventExtensions") {
        break;
    }
} finally {
}
