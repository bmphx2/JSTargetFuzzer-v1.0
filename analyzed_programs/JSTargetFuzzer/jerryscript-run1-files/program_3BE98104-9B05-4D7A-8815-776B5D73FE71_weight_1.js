function f0() {
}
function f7() {
    return f0;
}
function f11() {
    const o15 = {
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
    return o15;
}
const v16 = f11();
const v17 = f11();
f11();
function f19() {
    return v17;
}
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v16;
}
new F23(v16, 4294967296, v17);
const v29 = new F23(4294967296, -53536, v17);
new F23(v29, -1956692059, v17);
new Int16Array(7);
new Int16Array(9);
let v39 = new Uint32Array(2);
v39 |= v39[8];
try {
    const v46 = [-1000000000000.0,0.5763032876863042,2.2250738585072014e-308,1.598985503839912e+308,1e-15];
    try { v46.flatMap(); } catch (e) {}
    const v50 = new BigInt64Array(1148);
    for (const v51 in v50) {
        14 + v51;
    }
} catch(e55) {
    v29.g = e55;
}
