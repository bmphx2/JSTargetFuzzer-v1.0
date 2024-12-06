new Int16Array(1400);
const v5 = new Float32Array(146);
const v8 = new Float64Array(4);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = Float32Array;
    this.c = a12;
}
const v15 = new F9(v5, 146, Float32Array, 1400);
new F9(v15, 146, Float32Array, 1400);
const v17 = new F9(F9, 146, F9, 4);
v17.valueOf = 146;
function f18(a19, a20, a21, a22) {
    const o23 = {
        "f": F9,
        "h": v8,
        __proto__: v17,
        "e": a19,
    };
    return o23;
}
f18(146, 146, 1400, 4);
f18(146, 146, 1400, 4);
f18(146, 146, 4, 146);
