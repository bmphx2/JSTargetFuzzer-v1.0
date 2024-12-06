function f0() {
}
const v3 = new Uint8Array(37);
const v6 = new BigUint64Array(2396);
for (let v9 = 0; v9 < 32; v9++) {
    this["p" + v9] = v9;
}
const v14 = new BigInt64Array(229);
function f15(a16, a17) {
    const o41 = {
        "h": v6,
        __proto__: a17,
        "e": v3,
        "b": Uint8Array,
        "f": a16,
        "c": a16,
        "a": 37,
        "d": f0,
        get g() {
            const v19 = super.b;
            super.d = 229;
            function F20(a22, a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
            }
            v19 | 18209n;
            const v29 = new Float32Array(10657);
            const v32 = new BigInt64Array(702);
            try { v29.set(v32); } catch (e) {}
            let [,,...v34] = a17;
            try { new v34(v14, v19, v34, BigUint64Array, v34); } catch (e) {}
            a16.e >>>= v19;
            f15 = f0;
            try { a17(2396, 37, v34, v3); } catch (e) {}
            v14.byteLength = 2396;
            return v34;
        },
    };
    return o41;
}
f15(37, BigUint64Array);
f15(2396, 37);
const v44 = f15(2396, 229);
const v45 = [];
function f46() {
    return v45;
}
function F47(a49, a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v54 = 0; v54 < 5; v54++) {
    v14["copyWithin"](v54, 12, BigUint64Array);
}
const v57 = new F47(v45, v45, v45);
const o59 = {
    "defineProperty": f46,
};
const v61 = new Proxy(v57, o59);
function f62() {
    return f62;
}
function f63() {
    return o59;
}
Object.defineProperty(v61, -16, { configurable: true, get: f63, set: f62 });
function F64() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -4096;
    this.d = -4096;
}
const v67 = new F64();
const v68 = new F64();
const o69 = {
    ...v68,
    __proto__: v67,
    [v67]: v67,
    [-1]: v44,
    [v67]: v68,
    [v68]: v67,
};
