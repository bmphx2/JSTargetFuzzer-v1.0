function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 536870887;
    this.f = 536870887;
    this.b = 536870887;
}
new F0();
new F0();
new F0();
new Uint32Array(4);
new Uint8ClampedArray(4096);
new BigInt64Array(168);
const v17 = new Uint32Array(181);
let v19 = BigUint64Array;
let v20 = new v19(1);
let v21 = 253;
[v21,,v19,v20] = v17;
try { v19["abs"](181, "abs", v19); } catch (e) {}
new Uint16Array(v21);
for (let i34 = 0; 2 < 2; i34++) {
    new Function("x");
    ("x").name;
}
Function();
