function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -7;
    this.g = -7;
}
const v3 = new F0();
const v4 = new F0();
new F0();
new Uint8ClampedArray(168);
const v11 = new BigUint64Array(64);
new Uint8Array(39);
function f18(a19, a20, a21, a22) {
    const o23 = {
        "e": a20,
        "f": 168,
        "h": v11,
    };
    return o23;
}
f18(-1.0, -1000000000000.0, v4, v3);
f18(-1000000000.0, -1.0, v4, v4);
f18(-1000000000.0, -1000000000.0, v4, v3);
