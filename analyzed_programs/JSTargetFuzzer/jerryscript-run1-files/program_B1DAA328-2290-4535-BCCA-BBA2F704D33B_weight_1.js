function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.d = a5;
    this.b = a5;
}
new F3(5, 37950);
new F3(5, 268435440);
new F3(268435440, 37950);
const v16 = new Date();
let v17 = 0;
for (let i = 0; i < 5; i++) {
    v16.setMonth(v17);
    v17++;
}
new BigInt64Array(512);
new Float32Array(257);
new BigInt64Array(255);
const v29 = new Uint32Array(181);
let v31 = BigUint64Array;
let v32 = new v31(1);
let v33 = 253;
[v33,,v31,v32] = v29;
try { v31["abs"](181, v33, v31); } catch (e) {}
new Uint16Array(v33);
for (let i46 = 0; i46 < 2; i46++) {
    const v52 = new Function("x");
    Math.hypot(v52);
    const v57 = !i46;
    const v58 = v57 ** v52;
    let v59 = v57 / v52;
    --v59;
    v58 || 5.178937884576388e+307;
    v52.name;
}
Function();
