function f3() {
    return "1073741824";
}
function f7() {
    return 4294967295;
}
new Uint32Array(128);
new Uint8Array(255);
new BigUint64Array(127);
const v19 = new Uint32Array(181);
let v21 = BigUint64Array;
let v22 = new v21(1);
let v23 = 253;
[v23,,v21,v22] = v19;
try { v21["abs"](181, v23, v21); } catch (e) {}
const v30 = new Uint8Array([-256,-9]);
gc(v30);
new Uint16Array(v23);
const v39 = new BigUint64Array(BigUint64Array, BigUint64Array);
function F41(a43, a44, a45) {
    if (!new.target) { throw 'must be called with new'; }
    const v47 = new Proxy(v39, v39);
    v47.g = Int8Array;
}
for (let i51 = 0; i51 < 2; i51++) {
    const v57 = new Function("x");
    v57.name;
}
Function();
