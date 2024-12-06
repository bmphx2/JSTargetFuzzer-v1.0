new Int16Array(3);
new BigUint64Array(10);
new Uint8ClampedArray(1);
function f12() {
    let v15 = "message";
    const o20 = {
        get a() {
            let v17;
            try { v17 = this("223928331", this, 5.662791040550411e+307); } catch (e) {}
            v15 = v17;
            try {
                super.n();
            } catch(e19) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        3681: v15,
    };
    return o20;
}
const v21 = f12();
f12();
const v23 = f12();
function F27(a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a29;
    this.d = 1073741825;
}
const v32 = new F27(v23, v23, 3);
const v33 = new F27(v32, v21, 3);
new F27(v21, v33, -31282);
-9n >> 268435456n;
new Int16Array();
new Uint32Array(4050);
new Uint8ClampedArray(4055, Int16Array, Uint8ClampedArray, Uint32Array);
new Uint16Array(134);
