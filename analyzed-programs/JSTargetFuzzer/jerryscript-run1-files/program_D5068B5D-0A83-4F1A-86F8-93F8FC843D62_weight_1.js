const v0 = [];
new Uint32Array(3015);
const v6 = new Float64Array(3);
const v9 = new Float64Array(8);
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = Float64Array;
    this.e = v6;
    this.c = a14;
}
const v15 = new F10(3, 3015, Float64Array);
const v16 = new F10(3, 8, v15);
const v17 = new F10(3015, 8, 8);
function f18(a19, a20, a21) {
    const o27 = {
        "b": v0,
        [v6]: a21,
        "c": v16,
        "e": a19,
        [a21](a23, a24, a25) {
            a21.length = 9;
            return a21;
        },
        "h": a19,
        ...v16,
        "g": Uint32Array,
        8: a21,
        [v9]: v17,
        896: a20,
    };
    return o27;
}
f18(3, v15, f18(3015, v16, v15));
f18(8, v17, v17);
function f31() {
}
const v42 = ("boolean")[5];
f31 < v42;
v42[257] = "symbol";
f31(..."10", ..."unscopables", ..."symbol", "W");
new Uint8ClampedArray(9);
new Int8Array(2);
new Float32Array(15);
