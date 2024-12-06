function f0() {
    const o8 = {
        "e": "copyWithin",
        "c": -2,
        ["copyWithin"]: -2,
        __proto__: "copyWithin",
        0: -2,
        ..."copyWithin",
        get f() {
            const o5 = {
            };
            new Proxy(this, o5);
            return "copyWithin";
        },
        "b": -2,
        3: -2,
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
function f12(a13) {
    const o18 = {
        ...v10,
        "h": v11,
        "c": v11,
        "d": a13,
        "f": v11,
        [a13](a15, a16) {
            Object.defineProperty(this, "d", { get: f0, set: f0 });
            super.f = a13;
            f0();
            a13.toString = f0;
            return a16;
        },
        "b": v10,
        "a": f0,
        3667: a13,
    };
    return o18;
}
const v19 = f12(v10);
const v20 = f12(v9);
const v21 = f12(v11);
function F22(a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v19;
    this.b = v19;
    this.g = a24;
}
const v27 = new F22(v10, v21, f12);
const v28 = new F22(v10, v9, v27);
const v29 = new F22(v11, v11, v28);
const v30 = [v11,v28,v20,v29,v10];
[v11,[v30,F22,v29,v19],v30,v10];
const v34 = new BigUint64Array(BigUint64Array, BigUint64Array, BigUint64Array);
v34[Symbol.iterator] = 7;
const v39 = new Float32Array(Symbol, 7, 7);
v39[-1] = BigUint64Array;
