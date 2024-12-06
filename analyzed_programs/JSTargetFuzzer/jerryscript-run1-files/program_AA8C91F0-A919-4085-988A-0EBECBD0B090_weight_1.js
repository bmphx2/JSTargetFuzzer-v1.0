const v1 = new WeakMap();
const v2 = [v1,v1];
const v3 = [v1,WeakMap,v1,v2];
const v4 = [v3,v1];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a8.g = a7;
    a7.c = v4;
    this.b = a8;
}
for (const v9 of v4) {
    typeof WeakMap === "undefined";
}
const v13 = new F5(v3, v1);
new F5(v3, v13);
new F5(v2, v4);
new Uint16Array(257);
new Uint8Array(3);
new BigUint64Array(9);
const v26 = new BigUint64Array(F5, BigUint64Array, BigUint64Array);
v26[Symbol.iterator] = 7;
const v31 = new Float32Array(Symbol, 7, 7);
v31[-1] = BigUint64Array;
