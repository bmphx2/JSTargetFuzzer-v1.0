const v7 = new WeakMap();
function f8(a9, a10, a11) {
    const o12 = {
        "a": v7,
        ...v7,
        __proto__: v7,
        12: -9007199254740992,
        ...v7,
        ...v7,
        ...v7,
        "f": -27669,
        "c": a9,
        "g": a11,
        "e": -9007199254740992,
        [-2.2250738585072014e-308]: 1000000.0,
        "b": -9007199254740992,
        11: a9,
        [1000000.0]: -2.2250738585072014e-308,
        [-27669]: -27669,
        69: a11,
    };
    return o12;
}
f8(-1.1871593122658565e+308, -2.2250738585072014e-308, -9007199254740992);
const v14 = f8(1000000.0, 1000000.0, 1024);
f8(1000000.0, -2.2250738585072014e-308, 1024);
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a30;
    this.f = -4294967296;
}
new F25(-4294967296, 5n, "global", "-16");
new F25(-4294967296, -7n, "-16", "global");
const v33 = new F25(-1, 5n, "global", "global");
"function" == v33;
if (f8) {
} else {
    function F38(a40, a41, a42) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a42;
    }
    const v43 = new F38(F38, "global", "function");
    new F38(v43, "global", "function");
    new v14(v43, "global", "function");
}
