function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -8;
    this.a = -8;
    this.g = -8;
}
const v3 = new F0();
new F0();
new F0();
new Int16Array(0);
new Float64Array(1000);
new BigUint64Array(v3);
const v17 = new Uint32Array(181);
let v19 = BigUint64Array;
let v20 = new v19(1);
let v21 = 253;
[v21,,v19,v20] = v17;
try { v3["abs"](181, v21, v19); } catch (e) {}
new Uint16Array(v21);
for (let i34 = 0; i34 < 2; i34++) {
    new Function("x");
    F0.name;
}
Function();
