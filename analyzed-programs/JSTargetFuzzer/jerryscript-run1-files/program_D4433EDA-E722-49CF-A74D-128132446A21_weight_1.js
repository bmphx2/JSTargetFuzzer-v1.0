new Float64Array(16);
new Int16Array(9);
new Float64Array(1000);
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
const v18 = f12();
f12();
function f20() {
    return v18;
}
function F24(a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v17;
}
new F24(v17, 4294967296, v18);
const v30 = new F24(4294967296, -53536, v18);
new F24(v30, -1956692059, v18);
new Int16Array(7);
new Int16Array(9);
let v40 = new Uint32Array(2);
function F42(a44, a45) {
    if (!new.target) { throw 'must be called with new'; }
    ([Uint8Array]).shift();
}
new F42(Uint8Array, Uint8Array);
v40 |= v40[8];
try {
} catch(e56) {
    v30.g = e56;
}
