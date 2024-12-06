function f0() {
    let v3 = "message";
    const o8 = {
        get a() {
            let v5;
            try { v5 = this("223928331", this, 5.662791040550411e+307); } catch (e) {}
            v3 = v5;
            try {
                super.n();
            } catch(e7) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        3681: v3,
    };
    return o8;
}
const v9 = f0();
f0();
const v11 = f0();
function F15(a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a17;
    this.d = 1073741825;
}
const v20 = new F15(v11, v11, 3);
const v21 = new F15(v20, v9, 3);
new F15(v9, v21, -31282);
new Uint32Array(4050);
new Uint8ClampedArray(4055);
new Uint16Array(134);
