function f6(a7, a8, a9) {
    const o15 = {
        __proto__: 256n,
        "e": 9,
        "h": a7,
        set g(a11) {
            a11[a8] = 64n;
            let v13;
            try { v13 = this["reject"](); } catch (e) {}
            const t9 = this[v13];
            t9[268435440] = "reject";
        },
    };
    return o15;
}
const v16 = f6(-256, 9, 64n);
f6(-256, 536870887, 4294967296n);
f6(536870887, -256, 4294967296n);
function f19() {
    let v22 = "message";
    const o27 = {
        get a() {
            let v24;
            try { v24 = this("223928331", this, 5.662791040550411e+307); } catch (e) {}
            v22 = v24;
            try {
                super.n();
            } catch(e26) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        3681: v22,
    };
    return o27;
}
const v28 = f19();
f19();
const v30 = f19();
function F34(a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a36;
    this.d = 1073741825;
}
const v39 = new F34(v30, v30, 3);
const v40 = new F34(v39, v28, 3);
new F34(v28, v40, -31282);
new Uint32Array(4050);
new Uint8ClampedArray(v16);
new Uint16Array(134);
