function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a8;
}
const v10 = new F6(-8219, 33556);
const v11 = new F6(-8219, -4294967297);
let v12 = new F6(10000, 33556);
function f13(a14, a15, a16) {
    const o25 = {
        129: a14,
        128: -8219,
        ...a15,
        "g": a15,
        __proto__: v10,
        "c": a14,
        ...v10,
        [-8219]: a14,
        "h": 10000,
        "d": a14,
        n(a18, a19, a20, a21) {
            v12 = v11;
            return a18;
        },
    };
    return o25;
}
const v26 = f13(10000, -4294967297, f13);
f13(-4294967297, v12, f13);
f13(10000, v26, -478305328);
let v32 = 0;
do {
    v32++;
} while (this << Float32Array, v32 < -9223372036854775807)
