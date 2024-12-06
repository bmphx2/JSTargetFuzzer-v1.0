function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 255;
    this.e = 255;
    this.d = 255;
}
const v3 = new F0();
const v4 = new F0(v3, v3, v3);
const v5 = new F0();
function f6(a7, a8) {
    const o16 = {
        "h": a7,
        "c": F0,
        ...a8,
        7: v4,
        "arguments": F0,
        o(a10, a11, a12) {
            a7 = a11;
            a7.toString = a11[this[268435440]];
            a12 ^ v4;
            return f6;
        },
        "a": v4,
        "g": v3,
    };
    return o16;
}
f6(v4, v3);
f6(v5, v4);
f6(v3, v5);
new Float64Array(256);
new F0(6);
new BigUint64Array(3);
let v29 = 0n;
for (let v30 = 0; v30 < 5; v30++) {
    v29 -= 9223372036854775807n;
}
