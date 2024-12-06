function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 65537;
    this.b = 65537;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o22 = {
        "g": v3,
        o(a10, a11, a12) {
            a10[6] = a11;
            try {
                super.toString(a10, a12);
            } catch(e14) {
            }
            return F0;
        },
        ...a7,
        "b": a8,
        3038: v5,
        "f": a7,
        [a8](a16, a17, a18, a19) {
            let [v20,,v21] = a17;
            return a7;
        },
        "h": F0,
        "c": v3,
        "a": v3,
    };
    return o22;
}
const v23 = f6(v4, v3);
const v24 = f6(v5, v4);
let v25 = f6(v3, v3);
v25.length = 128;
v25 % v25;
v25 / -12;
const v31 = -12 ^ F0;
Math.max(v31);
const v33 = -12 & F0;
F0 >>> v31;
v33 + v25;
[1.0999226925437022e+308,0.7858613943940447,Infinity,0.4474036932696822,-2.0,175115.62444613897];
[0.5400263326335812,-390159.4199687983,-2.6004226791040903,4.0,1000000000000.0,-4.0];
[4.0,1.7976931348623157e+308];
function f39(a40, a41, a42, a43) {
    const o51 = {
        "f": v24,
        __proto__: a42,
        "e": v23,
        "d": v5,
        "b": v3,
        m(a45, a46) {
            a40.b **= this;
            ("1000").normalize("NFKC");
            const v50 = new f6(this, a45);
            v25 = v50;
            return v3;
        },
    };
    return o51;
}
f39(v3, v5, v3, v23);
f39(v5, v4, v3, v24);
f39(v4, v3, v4, v24);
("symbol")["slice"]();
