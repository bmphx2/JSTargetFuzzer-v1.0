function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.d = a5;
    this.b = a5;
}
new F3(5, 37950);
new F3(5, 268435440);
new F3(268435440, 37950);
new BigInt64Array(512);
new Float32Array(257);
new BigInt64Array(255);
const v24 = new Uint32Array(181);
let v26 = BigUint64Array;
let v27 = new v26(1);
let v28 = 253;
[v28,,v26,v27] = v24;
try { v26["abs"](181, v28, v26); } catch (e) {}
new Uint16Array(v28);
for (let i41 = 0; i41 < 2; i41++) {
    const v47 = new Function("x");
    v47.name;
}
Function();
