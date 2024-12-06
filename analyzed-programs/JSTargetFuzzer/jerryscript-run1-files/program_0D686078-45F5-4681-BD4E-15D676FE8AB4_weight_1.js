function f0() {
    const o8 = {
        "d": Infinity,
        "h": 40391,
        ...40391,
        ..."toStringTag",
        __proto__: "toStringTag",
        "c": Infinity,
        set a(a5) {
            try {
                super.m(a5, 40391);
            } catch(e7) {
            }
        },
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
class C12 {
    2 = C12;
    65536 = v11;
    8 = v11;
    static d;
    [v9];
    static [v10];
    n(a14, a15) {
        const o16 = {
            "apply": f0,
            "has": f0,
            "ownKeys": f0,
            "preventExtensions": f0,
            "setPrototypeOf": f0,
            "c": a15,
            "a": v10,
            [a15]: a15,
            [C12]: a14,
            ...a15,
        };
        const v18 = new Proxy(this, o16);
        return v18;
    }
}
new C12();
new C12();
new C12();
function F37(a39, a40, a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a42;
    this.f = -4294967296;
}
new F37(-4294967296, 5n, "global", "-16");
new F37(-4294967296, -7n, "-16", "global");
const v45 = new F37(-4294967296, 5n, "global", "global");
if ("function" == v45) {
    const t56 = "-16";
    t56.length = -1024;
    try { v10.getUTCHours(); } catch (e) {}
    function F50(a52, a53) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = "-16";
        this.e = 848940902;
    }
    new F50(F37, 848940902);
    new F50(5n, 2147483648);
    new F50("7", 2147483648);
} else {
    function F58(a60, a61, a62) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a62;
    }
    const v63 = new F58(F58, "global", "function");
    new F58(v63, "global", "function");
    new F58(v63, "global", "function");
}
