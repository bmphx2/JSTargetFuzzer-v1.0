function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 65537;
    this.e = 65537;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o12 = {
        "h": F0,
        valueOf(a9, a10) {
            const o11 = {
                __proto__: this,
                "b": v4,
                "h": this,
                "c": v3,
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
        "g": a7,
        [F0]: v5,
        13: a7,
    };
    const o13 = {
        "f": v3,
        [o12]: a7,
        ...o12,
    };
    return o12;
}
f6(v4);
const v15 = f6(v3);
const v16 = f6(v5);
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a19;
}
new F17(v15, v4);
const v22 = new F17(v15, v4);
const v23 = new F17(v16, v5);
const v24 = [v16,v16,v23,F17,v22];
[v24];
[v16];
const v27 = [-2.220446049250313e-16];
const v28 = [851723.0180110349,2.220446049250313e-16,0.6275959047451665,-106.94598709061108,1.7976931348623157e+308,1.0];
const v29 = [-42.497097983965205,1.0265627985251962e+308,1e-15,0.20756353120005955,904.3201028421736,1.7976931348623157e+308,-0.0,-2.220446049250313e-16,-6.473918532603498,-953.3217407346846];
function f30(a31) {
    const o32 = {
        "a": v28,
        __proto__: v29,
        "c": a31,
        "d": v27,
        [v29]: v28,
        "f": v29,
        "g": a31,
        "e": v29,
        [a31]: v28,
        [v27]: v28,
        "b": a31,
        "h": v27,
        160: a31,
    };
    return o32;
}
let v33 = f30(v28);
const v34 = f30(v28);
v29[5] = v28;
new F17(v24["toString"](), v5);
function f38() {
    return v16;
}
const v39 = f30(v27);
[v39,v29,v29];
[v27];
const v42 = [v34,v28,v39];
v33.length = 7;
const o52 = {
    valueOf() {
        v42 << this;
        v33 = v42;
        return 7;
    },
};
