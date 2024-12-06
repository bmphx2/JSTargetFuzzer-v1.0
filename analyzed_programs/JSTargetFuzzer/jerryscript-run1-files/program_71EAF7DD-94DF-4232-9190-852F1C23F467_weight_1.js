const v1 = new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
    this.g = a4;
}
const v6 = new F2(v1, WeakMap);
new F2(v6, WeakMap);
new F2(F2, WeakMap);
function f9() {
    return v1;
}
new Uint16Array(5);
new Int16Array(2281);
new Float32Array(1277);
new Uint16Array(1);
new Float32Array(1000);
const v30 = new Uint8Array(41);
function f31() {
    return v30;
}
new BigInt64Array(16);
new Uint16Array(14);
const v40 = new Uint8Array(256);
let {"byteLength":v41,"byteOffset":v42,"length":v43,} = v30;
v30.c = 14;
with (v40.__proto__) {
    try { a(); } catch (e) {}
}
