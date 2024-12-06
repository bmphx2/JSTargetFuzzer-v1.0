function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 2147483648;
}
const v3 = new F0();
new F0();
new F0();
function f6() {
    return v3;
}
new Float64Array(f6);
new Float32Array(1971);
new Int16Array(2);
new Uint16Array(1);
const v24 = new Float32Array(1000);
const v27 = new Uint8Array(v24);
function f28() {
    return v27;
}
new BigInt64Array(BigInt64Array);
new Uint16Array(14);
new Uint8Array(256);
let {"byteLength":v38,"byteOffset":v39,"length":v40,} = v27;
Float64Array.c = 14;
with (v27.__proto__) {
    try { a(); } catch (e) {}
}
