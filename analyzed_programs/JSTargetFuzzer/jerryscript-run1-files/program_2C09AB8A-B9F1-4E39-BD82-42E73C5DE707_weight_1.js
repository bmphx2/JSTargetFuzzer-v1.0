function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a6;
    this.multiline = "size";
    this.d = "object";
}
new F3("T1", "T1");
new F3("T1", "size");
new F3("size", "size");
new Set();
new Uint32Array(1473);
new BigInt64Array(128);
new BigInt64Array(237);
const v23 = new Uint32Array(181);
let v25 = BigUint64Array;
let v26 = new v25(1);
let v27 = 14;
[v27,,v25,v26] = v23;
try { v25["abs"](181, v27, v25); } catch (e) {}
new Uint16Array(v27);
for (let i40 = 0; i40 < 2; i40++) {
    const v46 = new Function("x");
    v46.f;
}
Function();
