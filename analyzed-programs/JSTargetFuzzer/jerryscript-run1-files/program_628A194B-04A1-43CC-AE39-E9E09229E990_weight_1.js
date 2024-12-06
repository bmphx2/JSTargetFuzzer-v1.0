function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
    a6.f = 9;
}
const v7 = new F3(9, 9);
const v8 = new F3(9, 4294967297);
const v9 = new F3(4294967295, 4294967297);
new Uint32Array(1000);
new Int32Array(4);
const v18 = new BigUint64Array(7);
const v22 = new Uint8ClampedArray();
let v26;
try { v26 = v22["set"](4096, 23, ...v22, ...23); } catch (e) {}
for (const v27 in v26) {
}
function f28(a29, a30, a31, a32) {
    const o33 = {
        ...v7,
        "d": v9,
        1136423776: v18,
    };
    return o33;
}
f28(v7, -2, Int32Array, f28(v8, -2, Uint32Array, 4294967295));
f28(v7, -2, 7, 4294967297);
const v37 = new Uint8Array();
delete v37[-2];
