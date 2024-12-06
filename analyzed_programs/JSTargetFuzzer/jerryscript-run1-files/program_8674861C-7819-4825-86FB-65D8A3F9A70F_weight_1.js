function f0() {
}
const v3 = new Uint32Array(10);
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a10;
    this.h = f0;
    this.a = a8;
}
const v12 = new F6(F6, f0, Uint32Array, 256);
const v13 = new F6(f0, F6, v3, v12);
const v14 = new F6(10, v13, f0, v12);
new BigInt64Array(256);
const v18 = new Uint8Array(7);
new WeakMap();
const v24 = [-421.64567039388294,-1e-15,NaN,0.0,1.07640193722729e+308,975.4811346135555];
function f25(a26, a27) {
    const o28 = {
        "a": -1926130518,
        __proto__: v14,
        "f": a27,
        [a26]: f0,
        "d": v18,
    };
    return o28;
}
const v29 = f25(f25, f25);
const o30 = {
    "get": f25,
    "f": v29,
    "b": v29,
    "d": f25,
    ...v12,
    __proto__: 7,
    "set": f25,
};
const v32 = new Proxy(v29, o30);
v32.g >>= v24;
