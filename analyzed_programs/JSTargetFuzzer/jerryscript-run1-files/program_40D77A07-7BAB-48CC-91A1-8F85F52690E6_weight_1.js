function f0() {
    const o17 = {
        "e": "copyWithin",
        "c": "copyWithin",
        ["copyWithin"]: -2,
        __proto__: "copyWithin",
        p(a5, a6) {
            ("copyWithin").length;
            return "copyWithin";
        },
        "h": -735626807,
        0: -735626807,
        ...f0,
        get f() {
            const t14 = "copyWithin";
            delete this[delete t14[95]];
            const o14 = {
            };
            new Proxy(this, o14);
            return "copyWithin";
        },
        "b": f0,
        3: -735626807,
    };
    return o17;
}
const v18 = f0();
const v19 = f0();
const v20 = f0();
function f21(a22) {
    const o27 = {
        ...v19,
        "h": v20,
        "c": v20,
        "d": a22,
        "f": v20,
        [a22](a24, a25) {
            Object.defineProperty(this, "d", { get: f0, set: f0 });
            super.f = a22;
            a25();
            a22.toString = f0;
            return a25;
        },
        "b": v19,
        "a": v18,
        3667: a22,
    };
    return v18;
}
const v28 = f21(v19);
const v29 = f21(v18);
const v30 = f21(v20);
function F31(a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v28;
    a33.b = v28;
    this.g = a33;
}
const v36 = new F31(v19, v30, f21);
const v37 = new F31(v19, v18, v36);
const v38 = new F31(v20, v20, v37);
const v39 = [v20,v37,v29,v38,v19];
const v40 = [v39,F31,v38,v28];
v18["p"](f0);
try { v37.cosh(v38, v40); } catch (e) {}
const v45 = Symbol.toPrimitive;
v19[v45] = v45;
[v20,v40,v39,v19];
const v48 = new BigUint64Array(BigUint64Array, BigUint64Array, BigUint64Array);
v48[Symbol.iterator] = 7;
const v53 = new Float32Array(Symbol, 7, 7);
v53[-1] = BigUint64Array;
