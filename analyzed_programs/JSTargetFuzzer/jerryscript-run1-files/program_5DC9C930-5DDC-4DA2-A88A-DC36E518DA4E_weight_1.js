[];
function f16() {
    let v19 = "message";
    const o24 = {
        get a() {
            let v21;
            try { v21 = this("223928331", this, 5.662791040550411e+307); } catch (e) {}
            v19 = v21;
            try {
                super.n();
            } catch(e23) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        3681: v19,
    };
    return o24;
}
const v25 = f16();
f16();
const v27 = f16();
function F31(a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a33;
    this.d = 4096;
}
const v36 = new F31(v27, v27, 3);
const v37 = new F31(v36, v25, 3);
new F31(v25, v37, -31282);
new Uint32Array(4050);
new Uint8ClampedArray(4055, Uint8ClampedArray);
new Uint16Array(134, Uint16Array);
