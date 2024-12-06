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
const t12 = "-4294967296";
t12.valueOf = f9;
new Set();
new Uint16Array(5);
new Int16Array(2281);
new Float32Array(1277);
new Uint16Array(1);
new Float32Array(1000);
const v35 = new Uint8Array(41);
function f36() {
    return v35;
}
new BigInt64Array(16);
new Uint16Array(14);
const v45 = new Uint8Array(256);
let {"byteLength":v46,"byteOffset":v47,"length":v48,} = v35;
f9();
new Uint8Array(v46, 41);
129 === 1000 ? 129 : 1000;
v35.c = 14;
with (v45.__proto__) {
    try { a(); } catch (e) {}
}
