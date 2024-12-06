const v2 = new Float64Array(4);
const v5 = new BigInt64Array(3270);
const v8 = new Uint8Array(990);
const v10 = new WeakMap();
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v10;
}
new F11(4, 4, 4, v2);
new F11(990, 4, 3270, 3270);
new F11(990, 990, 3270, Uint8Array);
function f20() {
    let v23 = "message";
    const o32 = {
        get a() {
            let v24 = this;
            let v25;
            try { v25 = v24("223928331", v24, 5.662791040550411e+307); } catch (e) {}
            v23 = v25;
            try {
                v24 |= "223928331";
                v23[v8] = "223928331";
                v24 >>> v5;
                super.n();
            } catch(e31) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        3681: v23,
    };
    return o32;
}
const v33 = f20();
f20();
const v35 = f20();
function F39(a41, a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a41;
    this.d = 1073741825;
}
const v44 = new F39(v35, v35, 3);
const v45 = new F39(v44, v33, 3);
new F39(v33, v45, -31282);
new Uint32Array(4050);
new Uint8ClampedArray(4055);
new Uint16Array(134);
