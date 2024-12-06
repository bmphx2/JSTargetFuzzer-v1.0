const v5 = new Float64Array(8);
const v8 = new Uint8ClampedArray(54);
v8.valueOf = Uint16Array;
v8.length = 257;
const v11 = 8;
const v15 = new Uint16Array(185);
function f16() {
    let v19 = "message";
    const o31 = {
        get a() {
            let v21;
            try { v21 = this("223928331", this, 5.662791040550411e+307); } catch (e) {}
            v19 = v21;
            try {
                super.n();
                v15.length = 257;
                const t16 = "223928331";
                t16.h = 5.662791040550411e+307;
                const o25 = {
                    "maxByteLength": 1364,
                };
                const v27 = new ArrayBuffer(255, o25);
                new Uint8Array(v27);
            } catch(e30) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        "h": v15,
        "e": 5.662791040550411e+307,
        __proto__: v5,
        "d": v15,
        "g": -39791n,
        3681: v19,
    };
    return o31;
}
const v32 = f16();
f16();
const v34 = f16();
function F38(a40, a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a40;
    this.d = 1073741825;
}
const v43 = new F38(v34, v34, 3);
const v44 = new F38(v43, v32, 3);
new F38(v32, v44, -31282);
new Uint32Array(4050);
new Uint8ClampedArray(4055);
new Uint16Array(134);
