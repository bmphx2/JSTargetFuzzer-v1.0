function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -16;
    this.d = -16;
    this.b = -16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o12 = {
        [-2]: v4,
        "d": a8,
        "g": v4,
        1814: v5,
        ...v3,
        [a8]: a7,
        get a() {
            delete v5[this];
            a7.d = a7;
            v4[257];
            return this;
        },
        [v5]: v4,
    };
    return o12;
}
f6(v5, v3);
f6(v4, f6);
f6(v3, F0);
function f19() {
    return v4;
}
new Float64Array(5);
new Uint8ClampedArray(3332);
const v31 = new Uint32Array(129);
v5.b = v31;
