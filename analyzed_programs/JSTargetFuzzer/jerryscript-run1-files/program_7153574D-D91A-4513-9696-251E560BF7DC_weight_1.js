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
function f21(a22, a23, a24, a25) {
    const o26 = {
        ...v7,
        "d": v9,
        1136423776: v18,
    };
    return o26;
}
f21(v7, -2, Int32Array, f21(v8, -2, Uint32Array, 4294967295));
f21(v7, -2, 7, 4294967297);
const v30 = new Uint8Array();
delete v30[-2];
