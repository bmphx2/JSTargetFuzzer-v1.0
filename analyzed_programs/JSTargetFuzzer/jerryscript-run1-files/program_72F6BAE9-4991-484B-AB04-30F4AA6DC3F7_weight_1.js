function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.a = -14;
}
const v7 = new F3(1024, -14);
const v8 = new F3(-14, -14);
const v9 = new F3(-14, 1024);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a16;
    this.b = "symbol";
}
new F13(v8, F3, "undefined", 1024);
const v20 = new F13(v7, -14, "symbol", "object");
new F13(v9, v20, "undefined", v20);
function f22() {
    const o31 = {
        "g": F13,
        valueOf(a27) {
            a27.valueOf = 1024;
            for (const v28 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, -2.2250738585072014e-308);
                } catch(e30) {
                }
            }
            return 255;
        },
        [-2.2250738585072014e-308]: -2.2250738585072014e-308,
        "d": -1033928124,
    };
    return o31;
}
const v32 = f22();
const v33 = f22();
const v34 = f22();
function f38(a39, a40, a41, a42) {
    const o56 = {
        ...v33,
        "g": a40,
        set a(a44) {
            a44[a39] = a44;
            try { a44(this); } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o56;
}
const v57 = f38(v34, 1000000000000.0, 1000000000000.0, 1000000.0);
f38(v33, 1000000000000.0, 1000000000000.0, 1000000.0);
const v59 = f38(v32, 4.0, 4.0, 1000000000000.0);
const o63 = {
    __proto__: v57,
    4037: v33,
    "a": v34,
};
const o64 = {
    "h": v32,
    ...v59,
    "f": f38,
    "c": f38,
    "b": v32,
};
