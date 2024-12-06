new WeakMap();
function f11() {
    const o15 = {
        4096: 24473,
        __proto__: "sticky",
        "g": "sticky",
        ..."sticky",
        ["sticky"]: f11,
        [24473]: "sticky",
        ..."sticky",
        13: "sticky",
        "f": 24473,
        "multiline": 24473,
        "b": "sticky",
        ..."sticky",
        "e": -2.220446049250313e-16,
    };
    return o15;
}
const v16 = f11();
const v17 = f11();
f11(v17, 662645236n, v17);
function f19() {
    return v17;
}
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v16;
}
new F23(v16, 4294967296, v17);
const v29 = new F23(4294967296, -53536, v17, -1024);
new F23(v29, -1956692059, v17);
new Int16Array(7);
new Int16Array(8);
let v39 = new Uint32Array(12672);
v39 |= v39[3];
try {
} catch(e47) {
    v29.g = e47;
}
