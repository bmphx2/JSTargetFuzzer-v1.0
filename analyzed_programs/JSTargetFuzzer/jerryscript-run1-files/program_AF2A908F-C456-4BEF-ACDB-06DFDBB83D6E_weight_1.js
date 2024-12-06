function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -2147483649;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f12(a13, a14, a15) {
    const o16 = {
        ...v4,
        "d": a14,
        "e": 6,
        __proto__: v5,
        "f": F0,
        "g": -14n,
        2049: v3,
        9: -60035n,
        "h": -60035n,
        "a": -13,
        "b": -14n,
        ...v5,
        0: a13,
        [a13]: a13,
    };
    return o16;
}
f12(-13, v3, -11n);
f12(6, v4, -14n);
f12(4294967296, v5, -60035n);
const v22 = new Uint32Array(10);
let v24 = BigUint64Array;
let v25 = new v24(1);
let v26 = 253;
[v26,,v24,v25] = v22;
try { v24["abs"](10, v26, v24); } catch (e) {}
new Uint16Array(v26);
for (let i39 = 0; i39 < 2; i39++) {
    const v45 = new Function("x");
    v45.name;
}
Function();
