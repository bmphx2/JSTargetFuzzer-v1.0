function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -12;
    this.f = -12;
    this.e = -12;
}
new F0();
new F0();
new F0();
new Uint16Array(8);
new Uint32Array(256);
new Float32Array(3144);
new Uint16Array(1);
const v21 = [];
v21[252] = v21;
v21.shift();
new Float32Array(1000);
const v28 = new Uint8Array(41);
function f29() {
    return v28;
}
new BigInt64Array(16);
new Uint16Array(14);
new Uint8Array(256);
let {"byteLength":v39,"byteOffset":v40,"length":v41,} = v28;
v28.c = 14;
with (v28.__proto__) {
    try { a(); } catch (e) {}
}
