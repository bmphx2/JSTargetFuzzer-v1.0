function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -1343412265;
    this.e = -1343412265;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v15 = v4[Symbol.unscopables];
const v16 = [1073741824,v15,3];
[-40308];
[v5,3,v15,v16];
function f21() {
    const o25 = {
        4096: 24473,
        __proto__: F0,
        "g": "sticky",
        ..."sticky",
        ["sticky"]: -2.220446049250313e-16,
        [24473]: 6,
        ..."sticky",
        13: "sticky",
        "f": 24473,
        "a": 24473,
        "b": "sticky",
        ..."sticky",
        "e": -2.220446049250313e-16,
    };
    return o25;
}
const v26 = f21();
const v27 = f21();
f21();
function f29() {
    return v27;
}
function F33(a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v26;
}
new F33(v26, 4294967296, v27);
const v39 = new F33(4294967296, -4096, v27);
const v40 = new F33(v39, -1956692059, v27);
new Int16Array(7);
new Int16Array(9);
let v49 = new Uint32Array(2);
v49 |= v49[8];
try {
    for (let v54 = 0; v54 < 32; v54++) {
        v40["p" + v54] = v54;
    }
} catch(e60) {
    v39.g = e60;
}
