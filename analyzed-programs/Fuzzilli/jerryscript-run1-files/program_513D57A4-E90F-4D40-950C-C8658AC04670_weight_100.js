function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -1336183154;
    this.d = -1336183154;
    this.h = -1336183154;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a11;
    this.h = 268435440;
    this.f = a11;
}
new F9(v3, v5);
new F9(v4, v3);
new F9(v5, v5);
[268435441,-128,129];
const v17 = [-1010,8,6,0,434088536,-65537,-5,-1];
[-1533260128,-65537];
const o21 = {
};
const v23 = new Proxy(F0, o21);
try { v23(Proxy, v23, -1, ...v17); } catch (e) {}
const v25 = new Uint8Array(3);
new Int16Array(3401);
const v31 = new BigUint64Array(1000);
v31[null] = 2;
function f36(a37, a38, a39) {
    v25 < a37;
    let v41;
    try { v41 = v25.join(a39); } catch (e) {}
    return v41;
}
f36(3, 3, 3401);
const o43 = {
    "defineProperty": f36,
    "deleteProperty": f36,
    "getOwnPropertyDescriptor": f36,
    "getPrototypeOf": f36,
    "has": f36,
    "isExtensible": f36,
    "ownKeys": f36,
    "set": f36,
};
new Proxy(v25, o43);
