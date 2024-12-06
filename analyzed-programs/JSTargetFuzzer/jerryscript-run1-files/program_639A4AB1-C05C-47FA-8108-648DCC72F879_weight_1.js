function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 268435441;
    this.f = 268435441;
    this.g = 268435441;
}
new F0();
new F0();
new F0();
new WeakMap();
new BigInt64Array(6);
new Float64Array(119);
new Int16Array(257);
let v19 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
let v20 = BigUint64Array;
const v21 = new v20(12, 12, 12);
const v22 = new BigInt64Array(v21, Int16Array, WeakMap);
const v28 = new Date(Math.min(-505138646, Math));
const v31 = v28.setUTCFullYear(("2147483647")[11], -505138646, 150);
let v32;
try { v32 = v19(v21, BigInt64Array, v20, 257, 6); } catch (e) {}
({"buffer":v19,"d":v20,"g":v32,...v32} = v21);
for (let v34 = 0; v34 < 5; v34++) {
    v22["copyWithin"](v34, 12, v20);
}
Symbol(v31) === Uint8Array;
