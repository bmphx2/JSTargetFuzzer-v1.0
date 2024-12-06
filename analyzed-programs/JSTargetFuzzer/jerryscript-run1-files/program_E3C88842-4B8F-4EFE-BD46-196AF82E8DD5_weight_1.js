function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -65535;
    this.b = -65535;
}
new F0();
const v4 = new F0();
const v5 = new F0();
new Map();
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a18;
    this.f = -2147483647;
}
new F14(v4, 0, -2147483647);
new F14(v5, 30567, 536870887);
new F14(v4, 0, -2147483647);
const v24 = new Int32Array(7);
new Float32Array(13);
const v30 = new BigInt64Array(255);
new Int32Array(7, 13);
const o38 = {
    "a": v24,
    "d": v30,
    "c": 4294967296n,
    "b": -4096,
};
