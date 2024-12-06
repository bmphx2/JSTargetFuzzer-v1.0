function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 9;
    this.c = 9;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
let v7 = 1073741824;
function f9() {
    return v5;
}
function f10(a11, a12, a13, a14) {
    const o21 = {
        1: v5,
        [v4]: v4,
        ...a12,
        924: v5,
        [-1]: a12,
        "c": a13,
        valueOf(a16, a17, a18) {
            a11 << F0;
            a11 << this;
            return -15000;
        },
        ...v3,
        "a": v7,
    };
    return o21;
}
f10(v7, v5, v4, v5);
f10(-1263697091, v3, v5, v3);
const v24 = f10(-15000, v3, v5, v3);
const v30 = new Uint32Array(181);
let v32 = BigUint64Array;
let v33 = new v32(1);
let v34 = 253;
[v34,,v32,v33] = v30;
const v35 = v24 !== -1263697091;
if (v35) {
    try { v4.p(v35, -15000, v32); } catch (e) {}
} else {
    v7 += 14;
}
try { v32["abs"](181, v34, v32); } catch (e) {}
new Uint16Array(v34);
for (let i49 = 0; i49 < 2; i49++) {
    const v55 = new Function("x");
    v55.name;
}
Function();
