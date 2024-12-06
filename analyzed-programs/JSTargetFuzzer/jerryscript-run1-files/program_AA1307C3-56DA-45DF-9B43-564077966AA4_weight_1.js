const v0 = [];
function f1() {
    return v0;
}
function f2() {
    return f1;
}
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a11;
    this.d = a13;
    this.f = 4;
}
new F9(-1000000000.0, F9, -128, -9223372036854775807);
new F9(-1000000000.0, 8.392955112049574, -128, -128);
new F9(-1000000000.0, -1000000000.0, -9223372036854775807, -9223372036854775807);
new Uint16Array(1);
new Float32Array(1000);
const v26 = new Uint8Array(41);
function f27() {
    return v26;
}
new BigInt64Array(16);
new Uint16Array(14);
new Uint8Array(256);
let {"byteLength":v37,"byteOffset":v38,"length":v39,} = v26;
F9.c = 14;
with (v26.__proto__) {
    try { a(); } catch (e) {}
}
