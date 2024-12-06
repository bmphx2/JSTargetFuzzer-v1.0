function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -9;
}
new F0();
new F0();
new F0();
new Int16Array(2622);
new BigInt64Array(0);
new Uint8ClampedArray(10);
const v17 = new Uint32Array(181);
let v19 = BigUint64Array;
let v20 = new v19(1);
let v21 = 253;
[v21,,v19,v20] = v17;
try { v19["abs"](181, v21, v19); } catch (e) {}
new Uint16Array(v21);
for (let i34 = 0; 2 < 2; i34++) {
    const v40 = new Function("x");
    v40.name;
}
Function();
