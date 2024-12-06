function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a9;
    this.d = a8;
}
const v11 = new F6(-36203, 14, 1.4708525677377401e+308);
const v12 = new F6(-2, -36203, 1.4708525677377401e+308);
const v13 = new F6(-2, 14, -482.2183242706308);
function f14(a15, a16, a17, a18) {
    const o19 = {
        ...v12,
        "e": a15,
        "c": 14,
        ...v12,
        "g": -482.2183242706308,
        "h": 14,
        __proto__: v13,
        4096: 14,
        ...v13,
        ...v11,
        "b": 1000000000000.0,
    };
    return o19;
}
f14(14, 1.4708525677377401e+308, -2, -36203);
const v21 = f14(-36203, 1000000000000.0, -36203, -2);
f14(-2, 1.4708525677377401e+308, 14, -36203);
const v25 = new Uint32Array(Uint32Array);
let v27 = BigUint64Array;
let v28 = new v27(1);
let v29 = 253;
[v29,,v27,v28] = v25;
try { v27["abs"](v21, v29, v27); } catch (e) {}
new Uint16Array(v29);
for (let i42 = 0; i42 < 2; i42++) {
    const v48 = new Function("x");
    v48.name;
}
Function();
