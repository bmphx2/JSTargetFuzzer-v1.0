function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 12;
    this.e = 12;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11, a12) {
    const o13 = {
        __proto__: a10,
        "g": a11,
        45: a11,
        "a": a12,
        "d": a12,
        ...a12,
        [F0]: -2147483647,
        "e": -2147483647,
        "c": v4,
        512: v3,
        ...v5,
        "b": -2147483647,
        "h": -2147483647,
        "h": v3,
        ...v4,
    };
    return o13;
}
const v14 = f9(v3, -2147483647, v4);
for (let v15 = 0; v15 < 11; v15++) {
    v14.__proto__;
    v3[4294967296];
    let {"c":v18,"e":v19,"h":v20,} = v14;
}
f9(v14, -2147483647, -2147483647);
f9(v4, -2147483647, f9);
let v23 = 4294967296n;
v23 **= 1000n;
