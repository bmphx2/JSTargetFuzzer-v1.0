function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 65537;
    this.e = 65537;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    let o12 = {
        "h": F0,
        valueOf(a9, a10) {
            const o11 = {
                __proto__: this,
                "b": v4,
                "h": v3,
                "c": a7,
            };
            return a10;
        },
        [v5]: v4,
        __proto__: v3,
        ...v4,
        "e": v3,
        3: f6,
        536870887: f6,
        ...v5,
        "g": v4,
        [F0]: v5,
        13: a7,
    };
    const o14 = {
        get a() {
            v4[v4] = this;
            o12 = v3;
            return this;
        },
        "f": v3,
        [o12]: a7,
        ...o12,
    };
    return o12;
}
const v15 = f6(v4);
const v16 = f6(v3);
const v17 = f6(v5);
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a20;
}
new F18(v16, v4);
const v23 = new F18(F0, v4);
const v24 = new F18(f6, v5);
const v25 = [v17,v17,v24,F18,v23];
[v25];
const v27 = [v17];
const v28 = [-2.220446049250313e-16];
const v29 = [851723.0180110349,2.220446049250313e-16,0.6275959047451665,-106.94598709061108,1.7976931348623157e+308,1.0];
const v30 = [-42.497097983965205,1.0265627985251962e+308,1e-15,0.20756353120005955,904.3201028421736,1.7976931348623157e+308,-0.0,-2.220446049250313e-16,-6.473918532603498,-953.3217407346846];
function f31(a32) {
    const o33 = {
        "a": v29,
        __proto__: v30,
        "c": a32,
        "d": v28,
        [v30]: v29,
        "f": v30,
        "g": a32,
        "e": v30,
        [a32]: v29,
        [v28]: v29,
        "b": a32,
        "h": v28,
        160: a32,
    };
    return o33;
}
let v34 = f31(v29);
const v35 = f31(v29);
v30[5] = v29;
new F18(v25["toString"](), v5);
function f39() {
    v24[f6];
    v15.__proto__ = v27;
    const o43 = {
        "maxByteLength": 2013064405,
    };
    const v45 = new ArrayBuffer(128, o43);
    new Uint8ClampedArray(v45);
    return v17;
}
const v48 = f31(v28);
[v48,v30,v30];
[v28];
const v51 = [v35,v29,v48];
v34.length = 7;
const o69 = {
    valueOf() {
        v51 << this;
        const o61 = {
            "maxByteLength": 1120,
        };
        const v63 = new ArrayBuffer(1120, o61);
        new Uint8ClampedArray(v63);
        v34 = v27;
        return 7;
    },
};
