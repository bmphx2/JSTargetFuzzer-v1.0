const v2 = new Array(4);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v2;
    this.c = Array;
}
const v7 = new F3(F3, Array);
const v8 = new F3(F3, v7);
const v9 = new F3(v2, 4);
function f10(a11, a12, a13, a14) {
    const o22 = {
        9: v9,
        o(a16, a17, a18) {
            Array.prototype = a12;
            [] = a13;
            return a11;
        },
        "c": v9,
        10: F3,
    };
    return o22;
}
const v23 = f10(v7, v7, 4, v8);
f10(v7, v8, v8, f10);
f10(v9, v8, f10, v23);
function f26() {
    let v29 = "message";
    const o37 = {
        get a() {
            let v31;
            try { v31 = this("223928331", this, 5.662791040550411e+307); } catch (e) {}
            try {
                super.getMinutes(v31);
            } catch(e33) {
            }
            +v31;
            v29 = v31;
            try {
                super.n();
            } catch(e36) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        3681: v29,
    };
    return o37;
}
const v38 = f26();
f26();
const v40 = f26();
function F44(a46, a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a46;
    this.d = 1073741825;
}
const v49 = new F44(v40, v40, 3);
const v50 = new F44(v49, v38, 3);
new F44(v38, v50, -31282);
new Uint32Array(4050);
new Uint8ClampedArray(4055);
new Uint16Array(134);
