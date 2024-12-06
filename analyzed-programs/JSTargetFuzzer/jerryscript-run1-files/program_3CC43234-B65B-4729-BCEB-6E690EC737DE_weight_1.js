function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = f0;
    this.e = f0;
}
const v3 = new F1();
new F1();
const v5 = new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    v3.b = a8;
    this.h = a8;
    this.c = a8;
}
new F6(v5);
new F6(v3);
new F6(v5);
new Int8Array(16);
new Int16Array(3);
new BigInt64Array(1000);
const v23 = new Uint32Array(181);
let v25 = BigUint64Array;
let v26 = new v25(1);
let v27 = 253;
[v27,,v25,v26] = v23;
try { v25["abs"](181, v27, v25); } catch (e) {}
new Uint16Array(v27);
for (let i40 = 0; i40 < 2; i40++) {
    new Function("xX7QN");
    v27.name;
}
Function();
