function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1083115690;
}
new F0();
new F0();
new F0();
new Int32Array(257);
new Int8Array(1662);
new Uint16Array(6);
const v17 = new Uint32Array(181);
let v19 = BigUint64Array;
let v20 = new v19(1);
let v21 = 253;
[v21,,v19,v20] = v17;
try { v19["abs"](181, v21, v19); } catch (e) {}
new Uint16Array(v21);
new Uint8ClampedArray(512);
new Uint8ClampedArray(16);
new Uint32Array(2032);
for (let i46 = 0; i46 < 2; i46++) {
    const v52 = new Function("x");
    v52.name;
}
Function();
