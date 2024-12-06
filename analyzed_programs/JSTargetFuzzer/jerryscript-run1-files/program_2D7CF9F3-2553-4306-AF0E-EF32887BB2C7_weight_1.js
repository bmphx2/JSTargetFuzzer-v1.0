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
let v23;
try { v23 = v19(v21, BigInt64Array, v20, 257, 6); } catch (e) {}
({"buffer":v19,"d":v20,"g":v23,...v23} = v21);
for (let v25 = 0; v25 < 5; v25++) {
    v22["copyWithin"](v25, 12, v20);
}
Symbol(v20) === Uint8Array;
