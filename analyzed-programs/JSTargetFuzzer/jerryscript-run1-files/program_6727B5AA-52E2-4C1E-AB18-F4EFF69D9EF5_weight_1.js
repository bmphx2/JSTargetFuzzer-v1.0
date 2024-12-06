function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.a = -14;
}
const v7 = new F3(1024, -14);
const v8 = new F3(-14, -14);
const v9 = new F3(-14, 1024);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    let v14 = this;
    v14.d = a16;
    v14 **= 0;
    const v21 = Symbol.iterator;
    const o28 = {
        [v21]() {
            let v23 = 10;
            const o27 = {
                next() {
                    v23--;
                    const o26 = {
                    };
                    return Symbol;
                },
            };
        },
    };
    v14.b = "symbol";
}
new F13(v8, F3, "undefined", 1024);
const v30 = new F13(v7, -14, "symbol", "object");
new F13(v9, v30, "undefined", v30);
function f32() {
    let v34 = 255;
    const o45 = {
        "e": v34,
        ..."symbol",
        ["object"](a37, a38) {
            "object" != a38;
            v34 *= "undefined";
        },
        "g": F13,
        valueOf(a41) {
            a41.valueOf = 1024;
            for (const v42 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, v34, -2.2250738585072014e-308);
                } catch(e44) {
                }
            }
            return v34;
        },
        [-2.2250738585072014e-308]: -2.2250738585072014e-308,
        "d": -1033928124,
    };
    return o45;
}
const v46 = f32();
const v47 = f32();
const v48 = f32();
function f52(a53, a54, a55, a56) {
    const o75 = {
        ...v47,
        "g": a54,
        set a(a58) {
            function F59() {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F59();
            return a58;
            -14 % -1.7976931348623157e+308;
            a58[a53] = a58;
            try { a58(this); } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o75;
}
const v76 = f52(v48, 1000000000000.0, 1000000000000.0, 1000000.0);
f52(v47, 1000000000000.0, 1000000000000.0, 1000000.0);
const v78 = f52(v46, 4.0, 4.0, 1000000000000.0);
const o82 = {
    __proto__: v76,
    4037: v47,
    "a": v48,
};
const o83 = {
    "h": v46,
    ...v78,
    "f": f52,
    "c": f52,
    "b": v46,
};
