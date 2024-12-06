function f0() {
}
const v3 = new Uint8Array(37);
const v6 = new BigUint64Array(2396);
const v9 = new BigInt64Array(229);
function f10(a11, a12) {
    const o22 = {
        "h": v6,
        __proto__: a12,
        "e": v3,
        "b": Uint8Array,
        "f": a11,
        "c": a11,
        "a": 37,
        "d": f0,
        get g() {
            const v14 = super.b;
            super.d = 229;
            let [,,...v15] = a12;
            try { new v15(v9, v14, v15, BigUint64Array, v15); } catch (e) {}
            a11.e >>>= v14;
            f10 = f0;
            try { a12(2396, 37, v15, v3); } catch (e) {}
            v9.byteLength = 2396;
            return v15;
        },
    };
    return o22;
}
f10(37, BigUint64Array);
f10(2396, 37);
const v25 = f10(2396, 229);
const v26 = [];
function f27() {
    return v26;
}
function F28(a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v35 = 0; v35 < 5; v35++) {
    v9["copyWithin"](v35, 12, BigUint64Array);
}
const v38 = new F28(v26, v26, v26);
const o40 = {
    "defineProperty": f27,
};
const v42 = new Proxy(v38, o40);
function f43() {
    return f43;
}
function f44() {
    return o40;
}
Object.defineProperty(v42, -16, { configurable: true, get: f44, set: f43 });
function F45() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -4096;
    this.d = -4096;
}
const v48 = new F45();
const v49 = new F45();
const o50 = {
    ...v49,
    __proto__: v48,
    [v48]: v48,
    [-1]: v25,
    [v48]: v49,
    [v49]: v48,
};
