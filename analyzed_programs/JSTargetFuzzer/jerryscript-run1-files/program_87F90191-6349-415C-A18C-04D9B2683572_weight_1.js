function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 4;
    this.g = 4;
    this.h = 4;
}
new F0();
new F0();
new F0();
function f12() {
    const o16 = {
        4096: 24473,
        __proto__: "sticky",
        "g": "sticky",
        ..."sticky",
        ["sticky"]: -2.220446049250313e-16,
        [24473]: "sticky",
        ..."sticky",
        13: "sticky",
        "f": 24473,
        "a": 24473,
        "b": "sticky",
        ..."sticky",
        "e": -2.220446049250313e-16,
    };
    return o16;
}
const v17 = f12();
let v18 = 7327893n;
v18 ^= v18;
const v19 = f12();
f12();
function f21() {
    return v19;
}
function F25(a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v17;
}
new F25(v17, 4294967296, v19);
const v31 = new F25(4294967296, -53536, v19);
new F25(v31, -1956692059, v19);
new Int16Array(7);
new Int16Array(9);
let v41 = new Uint32Array(2);
v41 |= v41[8];
try {
} catch(e49) {
    v31.g = e49;
}
