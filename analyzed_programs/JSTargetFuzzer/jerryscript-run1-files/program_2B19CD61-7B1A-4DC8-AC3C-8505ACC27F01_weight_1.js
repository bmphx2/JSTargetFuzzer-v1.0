function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 2147483648;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function f6() {
    return v3;
}
new Float64Array(f6);
new Float32Array(1971);
new Int16Array(2);
new Uint16Array(1);
const v24 = new Float32Array(1000);
for (let v26 = 0; v26 < 32; v26++) {
    v3["p" + v26] = v26;
}
const v30 = new Uint8Array(v24);
function f31() {
    return v30;
}
new BigInt64Array(BigInt64Array);
new Uint16Array(14);
{
}
const v41 = f31();
const v42 = [1,v41,v41];
new Uint8Array(256);
let {"byteLength":v44,"byteOffset":v45,"length":v46,} = v30;
Float64Array.c = 14;
with (v30.__proto__) {
    try { a(); } catch (e) {}
}
for (let i55 = 0, i56 = 10; i55 < i56; i55++, i56--) {
    v42[Float32Array] = i56;
    v5[10] <<= 10;
}
