function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v3;
}
new F6(v5);
const v10 = new F6(v3);
const v11 = new F6(v3);
for (let i14 = 0; i14 < 6; i14++) {
}
const v23 = new Map();
const v24 = [v23,v3,v3];
let v25 = [v3,v4];
v25 = [v3,F6,F1,v5,v25];
const v27 = v11 << v10;
function f28() {
    const o32 = {
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
    return o32;
}
const v33 = f28();
v5 < f28;
f0(v10, ...v25, v5, v27, ...v24);
let {"length":v37,} = v24;
v10.c = f28;
const v38 = f28();
f28();
function f40() {
    return v38;
}
function F44(a46, a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v33;
}
new F44(v33, 4294967296, v38);
const v50 = new F44(4294967296, -53536, v38);
new F44(v50, -1956692059, v38);
new Int16Array(7);
new Int16Array(9);
let v60 = new Uint32Array(2);
v60 |= v60[8];
try {
} catch(e68) {
    v50.g = e68;
}
